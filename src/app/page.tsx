import ProductList from './products/page'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
        Product List
      </h1>

      <ProductList />
    </div>
  )
}
