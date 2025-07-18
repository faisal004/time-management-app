// next-auth.d.ts
import NextAuth, { DefaultSession, User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      token?: string;
    } & DefaultSession["user"];
    token?: string; // (optional) if you want token at session root
  }

  interface User extends NextAuthUser {
    token?: string;
  }
}