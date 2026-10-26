
export const SITE_URL = 'https://dksm.com.my'

export const company = {
  name: 'DKSM Group',
  /** Registered entity, per the company's published website. */
  legalName: 'DKSM Sdn Bhd',
  formerName: 'Dyno Klang Fire Protection Engineering Sdn Bhd',
  foundedYear: 1982,
  /** The group's published slogan. */
  slogan: 'Powering your world with precision & expertise',
  tagline: 'Trusted Engineering Partner for Industrial & Infrastructure Projects',
  /**
   * Client direction (14 July 2026): fire protection comes before MEP —
   * it is the core; MEP is the secondary focus. Keep that order in copy.
   */
  supportingLine:
    'One-stop solutions for fire-protection and Mechanical, Electrical & Plumbing requirements.',
  shortDescription:
    'DKSM Group delivers end-to-end fire-protection and MEP solutions — from design, supply and installation to maintenance, training and authority approvals.',
  /** Adapted from the company profile on DKSM's published website. */
  introduction:
    'DKSM Sdn Bhd, operating under the brand name DKSM Group (formerly Dyno Klang Fire Protection Engineering Sdn Bhd), was founded in 1982 and incorporated in 1999. The group has grown into a prominent fire-protection and MEP services contractor with extensive design-and-build experience — offering in-house engineering, procurement, construction and commissioning (EPCC), alongside operation, maintenance, advisory services and training.',
  /*
   * Client decision (14 July 2026): Dyno MEP Services (DMS) is an associate
   * company, not a subsidiary, and is intentionally NOT referenced on this
   * website for marketing positioning reasons. Do not re-add it.
   */
}

/**
 * Homepage announcement / pop-up slot (client requested the option of
 * posting company news on the main page). Leave as null to hide; set to a
 * short message + optional link to show a dismissible banner on Home.
 */
export const announcement: { text: string; linkLabel?: string; linkTo?: string } | null = null

/** Statistics as published on DKSM's existing website. */
export const stats = [
  { value: 40, suffix: '+', label: 'Years of industry experience' },
  { value: 2500, suffix: '+', label: 'Projects completed' },
  { value: 500, suffix: '+', label: 'Clients served' },
  { value: 1982, suffix: '', label: 'Year established', static: true },
] as const

/**
 * Contact details — provided by the client on 14 July 2026
 * ("details can be corrected & adjusted before go-live").
 */
export const contact = {
  addressLines: [
    'No. 23, Jalan Tok Janggut H 35/H, Alam Impian',
    'Seksyen 35, 40470 Shah Alam, Selangor, Malaysia',
  ],
  /** International format, as instructed by the client. */
  phone: '+60 11-186 99854',
  /** As published on dksm.com.my. */
  email: 'enquiry@dksm.com.my' as string | null,
  whatsapp: 'https://wa.me/60168378459' as string | null,
  businessHours: [
    { days: 'Monday – Friday', hours: '8:00 am – 5:00 pm' },
    { days: 'Saturday', hours: '8:00 am – 1:00 pm' },
  ],
  mapEmbedUrl:
    'https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sNo.23%20Jalan%20Tok%20Janggut%20H%2035%2FH%20Alam%20Impian%20Seksyen%2035%2040470%20Shah%20Alam%20Selangor',
}

/**
 * Social channels — client direction: Facebook and LinkedIn only for DKSM
 * (IG/YouTube considered better suited to the B2C side). URLs from the
 * company's published profiles.
 */
export const socials = {
  facebook: 'https://www.facebook.com/dksmsb/' as string | null,
  linkedin: 'https://www.linkedin.com/company/dksmsb' as string | null,
}

export const serviceRegion = 'Klang Valley and beyond'

/** End-to-end engineering process, shown on Home and Services. */
export const processSteps = [
  {
    num: '01',
    title: 'Site assessment',
    text: 'We begin on the ground — reviewing your facility, existing systems and operating constraints before anything is proposed.',
  },
  {
    num: '02',
    title: 'Technical planning & design',
    text: 'Engineering requirements are translated into coordinated fire-protection and MEP designs with proper documentation.',
  },
  {
    num: '03',
    title: 'Product selection & procurement',
    text: 'Suitable systems and equipment are specified and sourced through our supply and distribution network.',
  },
  {
    num: '04',
    title: 'Installation & coordination',
    text: 'Our field teams manage installation alongside other trades, keeping workmanship and site programme under control.',
  },
  {
    num: '05',
    title: 'Testing & commissioning',
    text: 'Systems are tested, commissioned and documented — including preparation for the relevant authority inspections.',
  },
  {
    num: '06',
    title: 'Maintenance & support',
    text: 'Scheduled servicing and responsive support keep systems compliant and dependable long after handover.',
  },
] as const

/** Practical strengths for the "Why DKSM" section — no superlatives. */
export const strengths = [
  {
    title: 'More than four decades of experience',
    text: 'Established in 1982, DKSM has worked through generations of Malaysian building standards, technologies and site practices.',
  },
  {
    title: 'Integrated engineering capabilities',
    text: 'Fire protection, mechanical, electrical and plumbing handled under one roof — fewer interfaces, fewer gaps.',
  },
  {
    title: 'Support from design through maintenance',
    text: 'The team that designs and installs your systems is the same organisation that services them for the long term.',
  },
  {
    title: 'Trained field teams',
    text: 'Installation and servicing are carried out by experienced technicians under proper supervision — not subcontracted out of sight.',
  },
  {
    title: 'Familiarity with authority requirements',
    text: 'We prepare documentation and coordinate submissions and inspections with BOMBA and other relevant Malaysian authorities.',
  },
  {
    title: 'Long-term support after commissioning',
    text: 'Maintenance programmes, inspections and technical assistance continue well beyond project handover.',
  },
] as const

/**
 * Mission, vision and core values — updated per client feedback.
 */
export const missionVision = {
  mission:
    'To deliver value-added engineering solutions with a focus on safety, customization, and sustainability.',
  vision: 'To become the world’s premier provider of sustainable building services engineering.',
  /** The DKSM core values — the letters spell the group's name. */
  values: [
    {
      letter: 'D',
      title: 'Dedication to Leadership and Safety',
      text: 'We prioritize safety and lead by example in every project.',
    },
    {
      letter: 'K',
      title: 'Knowledge for Innovation and Performance',
      text: 'We use expertise and innovation to deliver quality solutions.',
    },
    {
      letter: 'S',
      title: 'Synergy through Collaboration',
      text: 'We foster teamwork to achieve mutual success.',
    },
    {
      letter: 'M',
      title: 'Mission for Sustainability',
      text: 'We build a sustainable future with eco-friendly practices.',
    },
  ],
}

/**
 * Company timeline, from the milestone history published on dksm.com.my.
 * The 2017 entry relating to Dyno MEP Services is intentionally omitted
 * (associate company — not referenced on this site). Award years follow
 * the published timeline (2015/2018); the supplied award logo files carry
 * 2016/17 wording — flag to client if a correction is needed.
 */
export const timeline = [
  {
    year: '1982',
    title: 'Founded',
    text: 'The group begins as Dyno Fire Prevention Supply & Engineering Services, serving Malaysian industries.',
    placeholder: false,
  },
  {
    year: '1999',
    title: 'Incorporated',
    text: 'Incorporated as Dyno Klang Fire Protection Engineering Sdn Bhd.',
    placeholder: false,
  },
  {
    year: '2000',
    title: 'First Package Award',
    text: 'Fire Protection Package.',
    placeholder: false,
  },
  {
    year: '2013',
    title: 'ISO 9001 certified',
    text: 'Certified to ISO 9001 for quality management.',
    placeholder: false,
  },
  {
    year: '2014',
    title: 'First international project',
    text: 'Project delivered in Liberia, on the African continent.',
    placeholder: false,
  },
  {
    year: '2015',
    title: 'First East Malaysia project',
    text: 'Fire-protection project delivered in Kota Kinabalu, Sabah.',
    placeholder: false,
  },
  {
    year: '2016',
    title: 'First M&E design-and-build project',
    text: 'The group delivers its first mechanical & electrical design-and-build project.',
    placeholder: false,
  },
  {
    year: '2017',
    title: 'Malaysia Power Brand & Sin Chew Business Excellence Awards',
    text: 'Recognised at the AEA Malaysia Power Brand awards, and the Sin Chew Business Excellence awards.',
    placeholder: false,
  },
  {
    year: '2022',
    title: 'Rebranded as DKSM Sdn Bhd',
    text: 'The group adopts the DKSM name, carrying four decades of track record forward.',
    placeholder: false,
  },
   {
     year: '2023',
     title: 'Strengthening',
     text: 'Additional 75+ resources to strengthen project delivery team.',
     placeholder: false,
   },
{
  year: '2024',
  title: 'New corporate office & award',
  text: `A new corporate office open at Alam Impian, Shah Alam.

MOSHPA Occupational Safety & Health Entrepreneur Excellent Safety Award 2024.`,
  placeholder: false,
},
  {
    year: '2026',
    title: 'First C&S Project',
    text: 'Obtain first C&S Package project.',
    placeholder: false,
  },
] as const

/** How DKSM works — About page approach section. */
export const approach = [
  {
    title: 'Understanding project requirements',
    text: 'Every engagement starts with the facility’s purpose, constraints and compliance obligations — not with a catalogue.',
  },
  {
    title: 'Coordinating technical disciplines',
    text: 'Fire protection, mechanical, electrical and plumbing are planned together so systems do not fight each other on site.',
  },
  {
    title: 'Selecting suitable systems and equipment',
    text: 'Specifications balance performance, availability of parts, and what the client’s team can realistically operate and maintain.',
  },
  {
    title: 'Managing installation quality',
    text: 'Supervised field teams, staged inspections and proper workmanship standards throughout the installation.',
  },
  {
    title: 'Testing and commissioning',
    text: 'Every system is verified against its design intent and documented before handover.',
  },
  {
    title: 'Supporting operations after completion',
    text: 'Maintenance programmes, spares support and technical guidance for the life of the installation.',
  },
] as const
