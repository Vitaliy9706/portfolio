import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Script from 'next/script'


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-8PJHE51WSZ" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
  
        gtag('config', 'G-8PJHE51WSZ');
      `}
    </Script>
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
    </>
  )
}
