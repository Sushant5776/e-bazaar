import Link from 'next/link'
import { CategoryCardProps } from 'types/props'

const CategoryCard = ({
  imageSrc,
  title,
  position,
  hrefLink,
}: CategoryCardProps) => {
  return (
    <Link href={hrefLink}>
      <div
        style={{ backgroundImage: `url('${imageSrc}')` }}
        className="relative h-32 w-32 cursor-pointer rounded-lg"
      >
        <div
          className={`absolute bottom-0 left-0 w-full rounded-b-lg bg-[#eceaebe6] py-2 ${
            position === 'l' ? 'rounded-tr-lg' : 'rounded-tl-lg'
          }`}
        >
          <h1 className="text-center text-sm font-medium leading-4 text-[#51424E]">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
