import utilStyles from '../styles/utils.module.css'

const achievements = [
  {
    year: '2004',
    events: [
      'Internship in manual testing at Hewlett-Packard, Porto Alegre, RS, Brazil 🇧🇷'
    ]
  },
  {
    year: '2007',
    events: [
      'Moved to Florianópolis, SC, Brazil 🌴'
    ]
  },
  {
    year: '2008',
    events: [
      'Moved back to Porto Alegre 🏠'
    ]
  },
  {
    year: '2009',
    events: [
      'First contact with test automation and JavaScript 👨‍💻',
      'Short experience as a PL/SQL Developer'
    ]
  },
  {
    year: '2012',
    events: [
      'Graduated as a bachelor in business administration at PUC-RS 🎓'
    ]
  },
  {
    year: '2014',
    events: [
      'Moved back to Florianópolis 🌴',
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
      'Joined Whereby team (former appear.in) as a Software Engineer in Test',
      'First post published on Medium',
      'Launch of the Protractor book (English and Portuguese versions) 📚'
    ]
  },
  {
    year: '2017',
    events: [
      'Launch of the protractor-helper library on npm',
      'Started lecturing in conferences in Europe 🇪🇺'
    ]
  },
  {
    year: '2018',
    events: [
      'Moved from Oslo to Amsterdam, Netherlands 🇳🇱',
      'Launch of the Talking About Testing online school 👨‍🏫'
    ]
  },
  {
    year: '2019',
    events: [
      'Joined GitLab\'s team as a Senior Software Engineer in Test'
    ]
  },
  {
    year: '2020',
    events: [
      'Left GitLab and joined QWIC Dutch eBikes as a Senior Quality Assurance Engineer 🚲'
    ]
  },
  {
    year: '2021',
    events: [
      'Left QWIC, and as instructor and founder, I\'m taking the Talking About Testing online school to the next level 📈',
      'Approved as a Cypress.io Ambassador 🏆',
      'Reached 1K followers on Twitter 🎉'
    ]
  },
  {
    year: '2022',
    events: [
      'Got to 10k enrollments on my Udemy courses ✨',
      'Together with Alekson Fortes, I started a podcast called Testando na Gringa (content in Portuguese) 🎙️',
      'The Talking About Testing channel has been approved to be part of the YouTube Partner Program ✅',
      'Moved from Amsterdam to Barcelona, Spain 🇪🇸',
      'Joined Typeform as a Senior Quality Assistance Software Engineer',
      'Reached 2.5K subscribers on YouTube 🥳',
      'Launch o the Cypress .press() custom command'
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
