import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { CategoryPageContextParams } from 'types/interfaces'

const CategoryPage: NextPage<{ category: string }> = ({ category }) => {
  return (
    <div>
      <Head>
        <title>{category}</title>
      </Head>
      <h1>This is {category} page</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { category } = params as CategoryPageContextParams
  return {
    props: { category },
  }
}

export default CategoryPage
