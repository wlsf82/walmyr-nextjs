import utilStyles from '../styles/utils.module.css'

const menuItems = [
  {
    title: 'Book',
    url: 'https://leanpub.com/end-to-end-testing-with-protractor'
  },
  {
    title: 'Courses',
    url: 'https://udemy.com/user/walmyr/'
  },
  {
    title: 'YouTube',
    url: 'https://youtube.com/playlist?list=PL-eblSNRj0QFCgBuHFSSJUeEYDm6wwvHI'
  }
]

export default function Menu() {
  return (
    <ul>
      {menuItems.map(menuItem => (
        <li className={utilStyles.list}>
          <a href={menuItem.url}>
            {menuItem.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
