import { NextAuthOptions } from "next-auth";
import prisma from "@/lib/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Credenciales inválidas");
          }

          const cliente = await prisma.cliente.findUnique({
            where: {
              correo: credentials.email,
            },
          });

          // console.log('cliente', cliente);

          if (!cliente || !cliente?.password) {
            throw new Error("Usuario no encontrado");
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            cliente.password
          );

          if (!isCorrectPassword) {
            throw new Error("Contraseña incorrecta");
          }

          return {
            id: cliente.id.toString(),
            nombre: cliente.nombre,
            correo: cliente.correo,
            rol: cliente.rol,
            email: cliente.correo,
            emailVerified: null,
            image: null,
          };
        } catch (error) {
          console.error("Error en authorize:", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.nombre = user.nombre;
        token.correo = user.correo;
        token.rol = user.rol;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          nombre: token.nombre,
          correo: token.correo,
          rol: token.rol,
          email: token.email,
          image: null,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/ingresar",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 30,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
