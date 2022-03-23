import Footer from '@/components/Footer'
import ItemCard from '@/components/ItemCard'
import { XIcon } from '@heroicons/react/outline'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CategoryPageContextParams } from 'types/interfaces'

const CategoryPage: NextPage<CategoryPageProps> = ({
  categoryTitle,
  categoryImage,
  items,
}) => {
  return (
    <div
      style={{ backgroundImage: "url('/images/background/background.png')" }}
      className="min-h-screen w-full bg-repeat-y"
    >
      <Head>
        <title>
          {categoryTitle === 'mensFashion'
            ? 'Mens Fashion'
            : categoryTitle === 'womensFashion'
            ? 'Womens Fashion'
            : `${categoryTitle.replace(
                categoryTitle.charAt(0),
                categoryTitle.charAt(0).toUpperCase()
              )}`}
        </title>
      </Head>
      <div className="min-h-screen w-full backdrop-blur-3xl">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="flex-1 text-center text-2xl font-medium text-[#1AC888] underline decoration-[#373c37bf]">
            {categoryTitle === 'mensFashion'
              ? 'Mens Fashion'
              : categoryTitle === 'womensFashion'
              ? 'Womens Fashion'
              : `${categoryTitle.replace(
                  categoryTitle.charAt(0),
                  categoryTitle.charAt(0).toUpperCase()
                )}`}
          </h1>
          <div className="relative h-12 w-12 rounded-bl-full bg-[#373c370d]">
            <XIcon className="absolute right-1.5 top-1/2 h-6 w-6 -translate-y-2/3 opacity-90" />
          </div>
        </header>

        {/* Category Image */}
        <div className="relative mx-auto mt-4 h-[12.25rem] w-[85%] rounded-lg">
          <Image
            src={categoryImage}
            className="rounded-lg"
            layout="fill"
            alt=""
            objectFit="cover"
          />
        </div>

        {/* Items */}
        {items.map((item) => (
          <ItemCard item={item} />
        ))}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { category } = params as CategoryPageContextParams
  const imageSrc = `/images/carousel/${category}.png`

  const items: CategoryResponse[] | [] = await fetch(
    `https://fakestoreapi.com/products/category/${
      category === 'jewelry'
        ? 'jewelery'
        : category === 'mensFashion'
        ? "men's clothing"
        : category === 'womensFashion'
        ? "women's clothing"
        : category
    }`
  ).then((res) => res.json())

  return {
    props: { categoryTitle: category, categoryImage: imageSrc, items },
  }
}

export default CategoryPage
