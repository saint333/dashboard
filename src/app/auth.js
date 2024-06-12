"use server";
import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import Credentials from "next-auth/providers/credentials";

const login = async (credentials) => {
  console.log("🚀 ~ login ~ credentials:", credentials);
  try {
    const response = await fetch(process.env.URL_API_AUTH, {
      method: "POST",
      body: JSON.stringify({
        usuario: credentials.username,
        password: credentials.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return "Error en las credenciales con api";
    }
    const user = await response.json();
    console.log("🚀 ~ login ~ user:", user)
    return user;
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    return "Error en las credenciales";
  }
};

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
          return user;
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
      console.log("🚀 ~ jwt ~ user:", user);
      console.log("🚀 ~ jwt ~ token, user:", token);
      if (user) {
        token.id = user.id;
      }
      return user;
    },
    async session({ session, token, user }) {
      console.log("🚀 ~ session ~ user:", user);
      console.log("🚀 ~ session ~ session, token:", session, token);
      session.user.id = token.id;
      return session;
    },
  },
  // session: {
  //   strategy: "jwt",
  // },
});
