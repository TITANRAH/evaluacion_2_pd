'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import { formSchema } from '@/schemas/auth/login.schema';
import { revalidateAfterAction } from '@/server-actions/auth/revalidate-after-action.action';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      correo: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const result = await signIn('credentials', {
        email: values.correo,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error('Credenciales inválidas');
      }

      await revalidateAfterAction();
      toast.success('Inicio de sesión exitoso');
      router.push('/');
    } catch (error) {
      toast.error('Credenciales inválidas');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SessionProvider>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-8 p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Iniciar sesión</h2>
            <p className="mt-2 text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <a href="/auth/registro" className="text-blue-600 hover:underline">
                Regístrate
              </a>
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="correo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="tu@correo.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input placeholder="******" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </SessionProvider>
  );
}
