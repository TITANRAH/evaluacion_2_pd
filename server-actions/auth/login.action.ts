"use server";

import { signIn } from "next-auth/react";

export async function loginUser(data: { correo: string; password: string }) {
  try {
    const result = await signIn("credentials", {
      email: data.correo,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: "Credenciales inválidas" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error en login:", error);
    return { success: false, error: "Error al iniciar sesión" };
  }
}
