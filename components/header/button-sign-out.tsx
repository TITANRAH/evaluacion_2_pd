'use client';

import { signOut } from 'next-auth/react';
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { revalidateAfterAction } from '@/server-actions/auth/revalidate-after-action.action';
import { toast } from 'react-hot-toast';

function ButtonSignOut() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });
      await revalidateAfterAction();
      router.push('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      toast.error('Error al cerrar sesión');
    }
  };

  return (
    <div>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
}

export default ButtonSignOut;
