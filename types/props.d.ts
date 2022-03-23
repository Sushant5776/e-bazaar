interface CategoryCardProps {
  imageSrc: string
  title: string
  position: string
  hrefLink: string
}

interface CategoryPageProps {
  categoryTitle: string
  categoryImage: string
  items: CategoryResponse[] | []
}
