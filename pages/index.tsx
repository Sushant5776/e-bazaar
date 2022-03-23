import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Thumbnails from '@/components/Thumbnails'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/background/background.png')" }}
      className="min-h-screen bg-repeat-y"
    >
      <Head>
        <title>E - Bazaar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#e91e6340" />
      </Head>

      <div className="min-h-screen backdrop-blur-3xl">
        <Header />
        <Thumbnails />
        <Categories />
        <Footer />
      </div>
    </div>
  )
}

export default Home
