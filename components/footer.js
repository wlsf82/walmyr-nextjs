import utilStyles from '../styles/utils.module.css'

export default function Footer() {
  return (
    <footer className={utilStyles.footer}>
      <p>Copyleft 2020. Walmyr Lima e Silva Filho.</p>
      <p>See this project <a href="https://github.com/wlsf82/walmyr-nextjs">on GitHub</a>.</p>
    </footer>
  )
}