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
    title: 'One-on-one',
    url: 'https://superpeer.com/walmyr'
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
