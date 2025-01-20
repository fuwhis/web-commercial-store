import Footer from "@/components/ui/Footer"
import ProductList from "./products/page"
import Header from "@/components/ui/Header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-8 bg-gray-100">
        <div className="min-h-screen pt-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Product List
          </h1>
          <ProductList />
        </div>
      </main>
      <Footer />
    </>
  )
}
