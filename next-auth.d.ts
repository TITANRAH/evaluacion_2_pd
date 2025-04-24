import { DefaultSession, DefaultUser } from 'next-auth';
import { AdapterUser } from '@auth/core/adapters';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      nombre: string;
      email: string;
      comuna: string;
      direccion: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser, AdapterUser {
    nombre: string;
    email: string;
    comuna: string;
    direccion: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    nombre: string;
    email: string;
    comuna: string;
    direccion: string;
  }
}
