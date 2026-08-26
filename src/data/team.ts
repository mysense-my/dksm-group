/**
 * DKSM Group leadership — top management only, per client direction
 * (key management and voluntary/association positions removed).
 * Portraits from the company's published website (originals in
 * raw-assets/people/).
 */

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  /** One-line introduction shown on the card. */
  summary: string
  /** Full biography shown when the card is expanded. */
  bio: string[]
}

export const team: TeamMember[] = [
  {
    id: 'jessica-wong',
    name: 'Jessica Wong',
    role: 'Managing Director',
    image: '/images/people/jessica-wong.webp',
    summary:
      'Founding member of the group, with over 30 years in fire protection.',
    bio: [
      'A founding member of the group, Jessica has spent more than three decades in the fire-protection industry. She guides and supervises DKSM’s business, financial and investment strategies, and stays closely involved in how the group grows.',
    ],
  },
  {
    id: 'stanley-siew',
    name: 'Stanley Siew',
    role: 'Executive Director',
    image: '/images/people/stanley-siew.webp',
    summary:
      'Directs the group’s business operations; joined in 2010 from multinational industry.',
    bio: [
      'Stanley joined the group in 2010, bringing team-leadership experience from multinational companies. He plays a pivotal role in directing DKSM’s day-to-day business operations.',
    ],
  },
  {
    id: 'gnoh-siew-woo',
    name: 'Gnoh Siew Woo',
    role: 'Advisor',
    image: '/images/people/gnoh-siew-woo.webp',
    summary:
      'Advisor to the group since 2013, with three decades in the construction industry.',
    bio: [
      'Mr Gnoh began his career in the early 1970s as a mathematics and electronics lecturer, then spent more than three decades in the construction industry. He founded Perniagaan Elektronik Merdeka in 1990, Selatan Johor Electrical Engineering (Ipoh) Sdn Bhd in 1993 and Dataran Dinamik in 2000, and has provided advisory services to the group since 2013.',
      'His work spans factory, residential and commercial projects, and his expertise in systems and modules continues to guide the group’s engineers.',
    ],
  },
]
