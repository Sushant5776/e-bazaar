import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Router from 'next/router'
import nprogress from 'nprogress'

nprogress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => nprogress.start())
Router.events.on('routeChangeComplete', () => nprogress.done())
Router.events.on('routeChangeError', () => nprogress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
