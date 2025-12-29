import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'

export default function Layout({ children, title, description }) {
  const pageTitle = title 
    ? `${title} | Szkółka Drzew i Krzewów Rydzyny` 
    : 'Szkółka Drzew i Krzewów Rydzyny'
  
  const pageDescription = description || 
    'Profesjonalna szkółka drzew i krzewów ozdobnych w Rydzynie. Oferujemy szeroki wybór roślin najwyższej jakości.'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
