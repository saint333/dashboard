"use server";
import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import Credentials from "next-auth/providers/credentials";
import { login } from "./authService";
const now = new Date();
export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          return { email: credentials.username, ...user };
        } catch (error) {
          console.log("🚀 ~ authorize ~ error:", error);
          return null;
        }
      },
      type: "credentials",
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      console.log("🚀 ~ jwt ~ session:", token)
      const userToken = { ...user, ...token, exp:  new Date(now.getTime() + 2 * 60000).getTime()};
      return userToken;
    },
    async session({ session, token }) {
      session.user = token;
      // session.expires = token.exp;
      return session;
    },
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log("🚀 ~ signIn ~ user, account, profile, email, credentials:", user, account, profile, email, credentials)
    //   return true;
    // },
  },
  session: {
    strategy: "jwt",
    maxAge: 2 * 60, // 2 minutes
  },
  jwt: {
    maxAge: 2 * 60, // 2 minutes
  },
  cookies: {
    sessionToken: {
      options: {
        maxAge: 30 * 60, // 2 minutes
      },
      name: "sessionToken",
    }
  }
});
