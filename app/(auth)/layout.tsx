import { auth } from '@/utils/auth';
import { redirect } from 'next/navigation';

export default async function RootAuthLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (session) {
    redirect('/');
  }
  return <main>{children}</main>;
}
