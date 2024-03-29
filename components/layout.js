import Head from 'next/head'
import Menu from './menu'
import Timeline from './timeline'
import Footer from './footer'
import styles from './layout.module.css'
import { borderCircle, heading2Xl } from '../styles/utils.module.css'

const name = 'Walmyr'
export const siteTitle = name

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My personal website built using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <Menu />
          <img
            src="/images/profile.png"
            className={`${styles.headerHomeImage} ${borderCircle}`}
            alt={name}
          />
          <h1 className={heading2Xl}>{name}</h1>
        </>
      </header>
      <main>{children}</main>
      <Timeline />
      <Footer />
    </div>
  )
}