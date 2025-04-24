import { z } from "zod";

export const formSchema = z
  .object({
    nombre: z.string().min(2, {
      message: "El nombre debe tener al menos 2 caracteres.",
    }),
    correo: z.string().email({
      message: "Por favor ingresa un correo electrónico válido.",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe tener al menos 6 caracteres.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
