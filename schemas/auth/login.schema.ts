import * as z from 'zod';

export const formSchema = z.object({
  correo: z.string().email({
    message: 'Por favor ingresa un correo electrónico válido.',
  }),
  password: z.string().min(1, {
    message: 'La contraseña es requerida.',
  }),
});
