import Image from 'next/image'
import Rating from '@/components/Rating'
import { CategoryResponse } from 'types/category'

const ItemCard = ({
  item: { image, title, description, price, rating },
}: {
  item: CategoryResponse
}) => {
  return (
    <div className="mx-auto my-4 h-max w-[85%] rounded-lg border border-[#dcdcdcbf] p-2">
      <div className="relative mx-auto h-32 w-[90%] rounded-lg">
        <Image
          src={image}
          layout="fill"
          className="rounded-lg"
          alt={`${title}`}
          objectFit="contain"
        />
      </div>
      <h2 className="text-md mt-4 inline-block w-full font-medium text-[#D32752] line-clamp-2">
        {title}
      </h2>
      <p className="mt-1 text-zinc-500 line-clamp-3">{description}</p>
      <span className="mt-2 flex items-center space-x-1">
        <Rating rate={rating.rate} />
        <p
          className={`text-sm font-medium ${
            Math.round(rating.rate) > 3
              ? 'text-green-400'
              : Math.round(rating.rate) < 3
              ? 'text-red-400'
              : 'text-zinc-400'
          }`}
        >
          ({rating.count})
        </p>
      </span>
      <button className="mx-auto mt-2 block w-full rounded-lg bg-[#FFBF4E] py-1.5 text-base font-medium text-[#373C37]">
        Buy @ ₹ {(price * 76.26).toFixed(2)}/-
      </button>
    </div>
  )
}

export default ItemCard
