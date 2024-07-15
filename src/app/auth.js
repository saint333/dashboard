"use server";
import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import Credentials from "next-auth/providers/credentials";
import { login } from "./authService";

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
          console.log("🚀 ~ authorize: ~ user:", user);
          return { email: credentials.email, ...user };
        } catch (error) {
          console.log("🚀 ~ authorize ~ error:", error);
          return null;
        }
      },
      type: "credentials",
    }),
  ],
  callbacks: {
    jwt({ user, token }) {
      if (user) {
        token.id = user.id;
      }
      return { user, token };
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return token.token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
});
