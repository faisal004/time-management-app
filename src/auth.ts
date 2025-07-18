import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({

      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        return {
          id: "1",
          name: "Dummy User",
          email: typeof credentials?.email === "string" ? credentials.email : "dummy@example.com",
          token: "dummy-token"
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user && typeof user.token === "string") {
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (typeof token.token === "string") {
        session.token = token.token;
      }
      return session;
    },
  },
})