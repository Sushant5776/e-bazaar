export interface CategoryCardProps {
  imageSrc: string
  title: string
  position: string
  hrefLink: string
}

export interface CategoryPageProps {
  categoryTitle: string
  categoryImage: string
  items: CategoryResponse[] | []
}
