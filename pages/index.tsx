import Header from '@/components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div
      style={{ backgroundImage: "url('images/background/background.png')" }}
      className="min-h-screen bg-repeat-y"
    >
      <Head>
        <title>E - Bazaar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen backdrop-blur-3xl">
        <Header />
      </div>
    </div>
  )
}

export default Home
