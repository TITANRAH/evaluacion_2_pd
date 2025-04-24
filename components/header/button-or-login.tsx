import Link from 'next/link';
import React from 'react';

function GoToLogin() {
  return (
    <Link href="/login" className="text-primary hover:underline">
      Ingresar
    </Link>
  );
}

export default GoToLogin;
