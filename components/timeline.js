import {
  heading2,
  timelineItem,
  listItemHeading2
} from '../styles/utils.module.css'

import achievements from './achievements'

export default function Timeline() {
  return (
    <>
      <h2 className={ heading2 }>Here's a brief of my history</h2>
      <ul>
        {achievements.map(({ year, events }) => (
          <li className={ timelineItem }>
            <h2 className={ listItemHeading2 }>{ year }</h2>
            { events.map(event => <p>{ event }</p>) }
          </li>
        ))}
      </ul>
    </>
  )
}
