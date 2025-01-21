import Image from 'next/image'

type ImageProps = {
  source: string
  alt: string | 'undefined'
  width?: number
  height?: number
}

export function ProductImage({
  source,
  width = 300,
  height = 300,
  alt,
}: ImageProps) {
  return (
    <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100'>
      <Image
        loading='lazy'
        src={source}
        width={width}
        height={height}
        alt={alt}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundImage: `url(${source})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          objectFit: 'contain',
        }}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </div>
  )
}
