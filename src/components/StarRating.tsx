import { StarRatingProps } from '../types/star-rating.types'

export default function StarRating({ rating, maxStars }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0)

  return (
    <div className='flex item-center'>
      {Array.from({ length: fullStars }).map((_, index) => (
        <span
          key={`full-${index}`}
          className='text-yellow-500'>
          ★
        </span>
      ))}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <span
          key={`empty-${index}`}
          className='text-gray-300'>
          ★
        </span>
      ))}
    </div>
  )
}
