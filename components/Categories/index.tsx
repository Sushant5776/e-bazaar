import CategoryCard from '@/components/CategoryCard'

const Categories = () => {
  return (
    <div className="mx-auto mt-4 w-[80%]">
      <h2 className="text-center text-2xl font-medium text-[#01BD84] underline decoration-[#373c37bf]">
        Categories
      </h2>
      <div className="mt-4 flex h-[272px] flex-wrap items-center justify-between gap-4">
        <CategoryCard
          imageSrc="/images/category/mensFashionCategory.png"
          title="Mens Fashion"
          position="l"
          hrefLink="/category/mensFashion"
        />
        <CategoryCard
          imageSrc="/images/category/womensFashionCategory.png"
          title="Womens Fashion"
          position="r"
          hrefLink="/category/womensFashion"
        />
        <CategoryCard
          imageSrc="/images/category/electronicsCategory.png"
          title="Electronics"
          position="l"
          hrefLink="/category/electronics"
        />
        <CategoryCard
          imageSrc="/images/category/jewelryCategory.png"
          title="Jewelry"
          position="r"
          hrefLink="/category/jewelry"
        />
      </div>
    </div>
  )
}

export default Categories
