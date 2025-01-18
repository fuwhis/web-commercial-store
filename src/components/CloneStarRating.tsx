import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { StarRatingProps } from '../types/star-rating.types'

export function CloneStarRating({ rating, maxStars }: StarRatingProps) {
  const filledStars = Math.floor(rating) // Number of fully filled stars
  const hasHalfStar = rating % 1 >= 0.5 // Determine if a half-star is needed
  const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0) // Remaining empty stars

  return (
    <div className='flex items-center text-yellow-400'>
      {/* Render filled stars */}
      {Array(filledStars)
        .fill(0)
        .map((_, i) => (
          <FaStar key={`filled-${i}`} />
        ))}

      {/* Render half-star if applicable */}
      {hasHalfStar && <FaStarHalfAlt key='half' />}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
    </div>
  )
}
