import utilStyles from '../styles/utils.module.css'

export default function Footer() {
  return (
    <footer className={utilStyles.footer}>
      <p>Copyleft 😜 2023. Walmyr.</p>
      <p>See this project <a href="https://github.com/wlsf82/walmyr-nextjs">on GitHub</a>.</p>
    </footer>
  )
}
