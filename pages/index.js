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
        <p>Hi, I'm <strong>Walmyr</strong>. I'm a software engineer who loves testing. I'm also a clean coder, blogger, YouTuber, podcaster, Cypress.io ambassador, online instructor, mentor, speaker, an active member of the testing automation and JavaScript communities, and a fan of good music, tattoos, vegan 🌱 food, and skateboarding. Follow me on <a href="https://www.linkedin.com/in/walmyr-lima-e-silva-filho">LinkedIn</a>, <a href="https://medium.com/@walmyrlimaesilv">Medium</a>, and on <a href="https://dev.to/walmyrlimaesilv">DEV Community</a>.</p>
      </section>
    </Layout>
  )
}
