import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
