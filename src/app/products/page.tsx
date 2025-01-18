// import Image from 'next/image'
import { ProductImage } from '@/components/ui/ProductImage'
import { CloneStarRating } from '../../components/CloneStarRating'

type ProductItem = {
  id: number
  title: string
  images: string[]
  description: string
  price: number | string
  rating: number
}

type IProduct = {
  limit: number
  products: ProductItem[]
  skip: number
  total: number
}

const API_URL = 'https://dummyjson.com/products'

export default async function ProductList() {
  const res = await fetch(API_URL)
  const data: IProduct = await res.json()
  const products = data?.products || []

  return (
    <div className='flex flex-wrap justify-center gap-4 px-4'>
      {products.map((item: ProductItem) => (
        <div
          key={item.id}
          className='w-1/2 md:w-1/4 lg:w-1/6 bg-white shadow-md rounded-lg border border-gray-200'
          // onClick={() => handleItemClick()}
        >
          <div className='p-4 bg-white rounded-lg'>
            <h2 className='text-center text-xl font-semibold text-gray-800 truncate'>
              {item.title}
            </h2>

            {/* <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100'>
              <Image
                loading='lazy'
                src={item.images[0]}
                width={300}
                height={300}
                alt='Product Image'
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div> */}
            <ProductImage
              source={item.images[0]}
              width={200}
              height={200}
              alt='pro-imgs'
            />
            <p className='text-gray-600 mt-2 truncate'>{item.description}</p>
            <div className='mt-4 text-gray-800 font-bold text-lg'>
              Price: <span className='text-green-500'>${item.price}</span>
            </div>

            <div className='mt-2'>
              <CloneStarRating
                rating={item.rating}
                maxStars={5}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
