import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavigationDrawer from '@/components/NavigationDrawer'
import Thumbnails from '@/components/Thumbnails'
import { NavDrawerAtom } from 'atoms/navAtom'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'

const Home: NextPage = () => {
  const showNav = useRecoilValue(NavDrawerAtom)

  return (
    <div
      style={{ backgroundImage: "url('/images/background/background.png')" }}
      className={`${
        showNav ? `h-screen overflow-hidden` : 'min-h-screen'
      } bg-repeat-y`}
    >
      <Head>
        <title>E - Bazaar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#e91e6340" />
      </Head>

      <div className="min-h-screen backdrop-blur-3xl">
        {/* Sidebar */}
        {/* {showNav ? <NavigationDrawer /> : ''} */}
        <NavigationDrawer />
        {/* Header */}
        <Header />

        {/* Thumbnails */}
        <Thumbnails />

        {/* Categories */}
        <Categories />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default Home
