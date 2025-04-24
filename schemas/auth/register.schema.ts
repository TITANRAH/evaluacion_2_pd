import * as z from 'zod';

export const formSchema = z
  .object({
    nombre: z.string().min(2, {
      message: 'El nombre debe tener al menos 2 caracteres.',
    }),
    email: z.string().email({
      message: 'Por favor ingresa un correo electrónico válido.',
    }),
    comuna: z.string().min(1, {
      message: 'La comuna es requerida.',
    }),
    direccion: z.string().min(1, {
      message: 'La dirección es requerida.',
    }),
    password: z.string().min(6, {
      message: 'La contraseña debe tener al menos 6 caracteres.',
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });
