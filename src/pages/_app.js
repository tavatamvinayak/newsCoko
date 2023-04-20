import '@/styles/globals.css'
import Head from 'next/head'


import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return(
    <>
       <Head>
        <title>Coco News</title>
        <meta name="description" content="International News --We provided" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  ) 
}
