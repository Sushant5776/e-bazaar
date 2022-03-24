import { StarIcon } from '@heroicons/react/solid'

const Rating = ({ rate }: { rate: number }) => {
  return (
    <span className="flex items-center">
      {Array.from(Array(Math.round(rate)), () => 1).map((_value, index) => (
        <StarIcon key={index} className="h-5 w-5 text-amber-400" />
      ))}
    </span>
  )
}

export default Rating
