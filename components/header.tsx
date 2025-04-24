import Link from 'next/link';

import GoToLogin from './header/button-or-login';
import { auth } from '@/utils/auth';
import ButtonCar from './header/button-car';
import ButtonDropDownMenu from './header/button-dropdown-menu';
import ButtonSignOut from './header/button-sign-out';

export async function Header() {
  const session = await auth();

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            Deccos
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Inicio
            </Link>
            <ButtonDropDownMenu />
            <Link
              href="/ubicacion"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Ubicación
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Contacto
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            Bienvenido {session ? session?.user?.nombre : <GoToLogin />}
          </div>
          <ButtonCar />

          <ButtonSignOut />
        </div>
      </div>
    </header>
  );
}
