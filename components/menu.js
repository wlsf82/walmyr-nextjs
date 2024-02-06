import { list } from '../styles/utils.module.css'

const menuItems = [
  {
    title: 'Courses',
    url: 'https://udemy.com/user/walmyr/'
  },
  {
    title: 'GitHub',
    url: 'https://GitHub.com/wlsf82'
  },
  {
    title: 'YouTube',
    url: 'https://youtube.com/playlist?list=PL-eblSNRj0QFCgBuHFSSJUeEYDm6wwvHI'
  }
]

export default function Menu() {
  return (
    <ul>
      {menuItems.map(({ url, title }) => (
        <li className={list}>
          <a href={url}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}
