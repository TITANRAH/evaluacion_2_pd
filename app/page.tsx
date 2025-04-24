import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProductGrid } from '@/components/product-grid'
import { products } from '@/lib/products'
import { auth } from '@/utils/auth'

export default async function Home() {

  // const session = await auth()
  // console.log('session?.user', session?.user)
  
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <Hero />
        <div className="container mx-auto py-12">
          <ProductGrid products={products} />
        </div>
        <Footer />
      </main>
    )
  
}
