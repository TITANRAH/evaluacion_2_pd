import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';

export default function RootStoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <Hero />
      {children}
      <Footer />
    </main>
  );
}
