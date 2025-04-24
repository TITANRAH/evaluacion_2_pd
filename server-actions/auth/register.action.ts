'use server';

import prisma from '@/lib/prismadb';
import bcrypt from 'bcrypt';

export async function registerUser(data: {
  nombre: string;
  email: string;
  comuna: string;
  direccion: string;
  password: string;
}) {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 12);

    const user = await prisma.cliente.create({
      data: {
        nombre: data.nombre,
        correo: data.email,
        comuna: data.comuna,
        direccion: data.direccion,
        contrasena: hashedPassword,
      },
    });

    return { success: true, user };
  } catch (error) {
    console.error('Error en registro:', error);
    return { success: false, error: 'Error al registrar usuario' };
  }
}
