import utilStyles from '../styles/utils.module.css'

const achievements = [
  {
    year: '2004',
    events: [
      'Internship in manual testing at Hewlett-Packard, Porto Alegre, RS, Brazil'
    ]
  },
  {
    year: '2007',
    events: [
      'Moved to Florianópolis, SC, Brazil 🇧🇷'
    ]
  },
  {
    year: '2008',
    events: [
      'Moved back to Porto Alegre =P'
    ]
  },
  {
    year: '2009',
    events: [
      'First contact with test automation and JavaScript 👨‍💻',
      'Short experience as a PL/SQL developer'
    ]
  },
  {
    year: '2012',
    events: [
      'Graduated as a bachelor in business management at PUC-RS 🎓'
    ]
  },
  {
    year: '2014',
    events: [
      'Moved back to Florianópolis =)',
      'Joined Taller Digital Business as an Agile Testing Coach',
      'Launch of the Talking About Testing blog'
    ]
  },
  {
    year: '2015',
    events: [
      'Launch of the Talking About Testing YouTube channel',
      'Started lecturing in conferences in Brazil'
    ]
  },
  {
    year: '2016',
    events: [
      'First time formally mentoring',
      'I got married! 🤵‍👰‍',
      'Moved from Brazil to Oslo, Norway 🇳🇴',
      'Joined Whereby team (former appear.in)',
      'First post published on Medium',
      'Launch of the Protractor book (English and Portuguese versions) 📚'
    ]
  },
  {
    year: '2017',
    events: [
      'Launch of the protractor-helper library on NPM',
      'Started lecturing in conferences in Europe'
    ]
  },
  {
    year: '2018',
    events: [
      'Moved from Oslo to Amsterdam, Netherlands 🇳🇱',
      'Launch of the Talking About Testing online school',
      'First course launched on Udemy 👨‍🏫'
    ]
  },
  {
    year: '2019',
    events: [
      'Joined GitLab\'s team'
    ]
  },
  {
    year: '2020',
    events: [
      'Left GitLab and re-joined Taller Digital Business as a Software Developer 👨‍💻'
    ]
  },
]

export default function Timeline() {
  return (
    <>
      <h2 className={utilStyles.darkGrayText}>Here's a brief of my history</h2>
      <ul>
        {achievements.map(achievement => (
          <li className={ utilStyles.timelineItem }>
            <h2 className={utilStyles.lightText}>{ achievement.year }</h2>
            {achievement.events.map(event => <p>{ event }</p>)}
          </li>
        ))}
      </ul>
    </>
  )
}
