import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm <strong>Walmyr Filho</strong>. I'm a software engineer that loves testing. I'm also a clean coder, blogger, YouTuber, writer, online teacher, mentor, speaker, an active member of the testing automation and JavaScript communities, and a fan of good music, tattoos, and skateboarding. Follow me on <a href="https://twitter.com/@walmyrlimaesilv">Twitter.</a></p>
      </section>
    </Layout>
  )
}
