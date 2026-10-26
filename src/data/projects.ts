/**
 * Projects, clients and gallery data.
 *
 * Project references, photos and the client list below are drawn from
 * DKSM's existing published website (dksm.com.my) — real, client-published
 * track record. Per client direction (14 July 2026): projects are grouped
 * by sector with no year separation, and clients are shown as logos only.
 */

export type Sector =
  | 'Fire Industrial'
  | 'Electrical Industrial'
  | 'Commercial'
  | 'Education'
  | 'Infrastructure'

export const sectors: Sector[] = [
  'Fire Industrial',
  'Electrical Industrial',
  'Commercial',
  'Education',
  'Infrastructure',
]

export interface ProjectCard {
  id: string
  name: string
  sectors: Sector[]
  location: string
  owner: string
  facility: string
  scope: string
  image: string
  imageAlt: string
}

/** Track record published by DKSM — most recent and notable first. */
export const projects: ProjectCard[] = [
  {
    id: 'press-metal',
    name: 'Press Metal Manufacturing Plant',
    sectors: ['Fire Industrial'],
    location: 'Klang, Selangor',
    owner: 'Press Metal Bhd',
    facility: 'Aluminium manufacturing facility',
    scope: 'Fire engineering',
    image: '/images/projects/real-press-metal.webp',
    imageAlt: 'Press Metal manufacturing plant in Klang',
  },
  {
    id: 'volvo',
    name: 'Volvo Manufacturing Plant',
    sectors: ['Fire Industrial'],
    location: 'Shah Alam, Selangor',
    owner: 'Volvo Car Manufacturing Malaysia Sdn Bhd',
    facility: 'Car manufacturing plant',
    scope: 'Fire engineering',
    image: '/images/projects/real-volvo.webp',
    imageAlt: 'Volvo car manufacturing plant in Shah Alam',
  },
  {
    id: 'decathlon',
    name: 'Decathlon Shah Alam',
    sectors: ['Commercial'],
    location: 'Shah Alam, Selangor',
    owner: 'Bulan Anggun Sdn Bhd & Decathlon (M) Sdn Bhd',
    facility: 'Sports retail store',
    scope: 'Fire engineering',
    image: '/images/projects/real-decathlon.webp',
    imageAlt: 'Decathlon retail store in Shah Alam',
  },
  {
    id: 'ukm-bangi',
    name: 'UKM Bangi',
    sectors: ['Education'],
    location: 'Bangi, Selangor',
    owner: 'Universiti Kebangsaan Malaysia',
    facility: 'Higher-education campus',
    scope: 'Fire engineering',
    image: '/images/projects/real-ukm-bangi.webp',
    imageAlt: 'Universiti Kebangsaan Malaysia campus in Bangi',
  },
  {
    id: 'universiti-islam-malaysia',
    name: 'Universiti Islam Malaysia',
    sectors: ['Education'],
    location: 'Cyberjaya, Selangor',
    owner: 'Universiti Islam Malaysia',
    facility: 'Higher-education campus',
    scope: 'Fire engineering',
    image: '/images/projects/universiti-islam-malaysia.webp',
    imageAlt: 'Universiti Islam Malaysia campus in Cyberjaya',
  },
  {
    id: 'kolej-tuanku-jaafar',
    name: 'Kolej Tuanku Jaafar',
    sectors: ['Education'],
    location: 'Mantin, Negeri Sembilan',
    owner: 'Kolej Tuanku Jaafar',
    facility: 'Boarding school campus',
    scope: 'Fire engineering',
    image: '/images/projects/kolej-tuanku-jaafar.webp',
    imageAlt: 'Kolej Tuanku Jaafar campus in Mantin',
  },
  {
    id: 'sjk-cina-hin-hua',
    name: 'Sekolah Jenis Kebangsaan (Cina) Hin Hua',
    sectors: ['Education'],
    location: 'Klang, Selangor',
    owner: 'Sekolah Jenis Kebangsaan (Cina) Hin Hua',
    facility: 'School campus',
    scope: 'Fire engineering',
    image: '/images/projects/sjk-cina-hin-hua.webp',
    imageAlt: 'Sekolah Jenis Kebangsaan (Cina) Hin Hua campus in Klang',
  },
  {
    id: 'monfort-boys-town',
    name: 'Monfort Boys Town',
    sectors: ['Education'],
    location: 'Shah Alam, Selangor',
    owner: 'Monfort Boys Town',
    facility: 'School campus',
    scope: 'Fire engineering',
    image: '/images/projects/monfort-boys-town.webp',
    imageAlt: 'Monfort Boys Town campus in Shah Alam',
  },
  {
    id: 'smjk-chung-hua',
    name: 'Sekolah Menengah Jenis Kebangsaan Chung Hua',
    sectors: ['Education'],
    location: 'Klang, Selangor',
    owner: 'Sekolah Menengah Jenis Kebangsaan Chung Hua',
    facility: 'School campus',
    scope: 'Fire engineering',
    image: '/images/projects/smjk-chung-hua.webp',
    imageAlt: 'Sekolah Menengah Jenis Kebangsaan Chung Hua campus in Klang',
  },
  {
    id: 'hartasuma',
    name: 'Hartasuma Sdn Bhd',
    sectors: ['Infrastructure'],
    location: 'Port Klang, Selangor',
    owner: 'Hartasuma Sdn Bhd',
    facility: 'Train system water pressure testing',
    scope: 'Fire engineering',
    image: '/images/projects/hartasuma.webp',
    imageAlt: 'Train system water pressure testing for Hartasuma Sdn Bhd',
  },
  {
    id: 'sukiada-engineering',
    name: 'Sukiada Engineering Sdn Bhd',
    sectors: ['Infrastructure'],
    location: 'Selangor',
    owner: 'Sukiada Engineering Sdn Bhd',
    facility: 'MRT2 rail infrastructure',
    scope: 'Fire engineering',
    image: '/images/projects/sukiada-engineering.webp',
    imageAlt: 'Sukiada Engineering Sdn Bhd MRT2 project site',
  },
  {
    id: 'tuah-tegas',
    name: 'Tuah Tegas Sdn Bhd',
    sectors: ['Infrastructure'],
    location: 'Bukit Kemuning, Shah Alam',
    owner: 'Tuah Tegas Sdn Bhd',
    facility: 'Drainage work & relocate utilities',
    scope: 'Drainage work & relocate utilities', 
    image: '/images/projects/tuah-tegas.webp',
    imageAlt: 'Drainage channel project at Bukit Kemuning, Shah Alam',  
     },
  {
    id: 'khind',
    name: 'Khind Manufacturing Plant',
    sectors: ['Fire Industrial'],
    location: 'Sekinchan, Selangor',
    owner: 'Khind-Mistral Industries Sdn Bhd',
    facility: 'Electrical & electronics manufacturing plant',
    scope: 'Fire engineering',
    image: '/images/projects/real-khind.webp',
    imageAlt: 'Khind manufacturing plant in Sekinchan',
  },
  {
    id: 'ajinomoto',
    name: 'Ajinomoto Manufacturing Plant',
    sectors: ['Fire Industrial'],
    location: 'Kuchai Lama, Kuala Lumpur',
    owner: 'Ajinomoto Sdn Bhd',
    facility: 'Food-seasoning production facility',
    scope: 'Fire engineering',
    image: '/images/projects/real-ajinomoto.webp',
    imageAlt: 'Ajinomoto manufacturing plant in Kuala Lumpur',
  },
  {
    id: 'yara',
    name: 'Yara Port Klang',
    sectors: ['Fire Industrial'],
    location: 'Port Klang, Selangor',
    owner: 'Yara International (M) Sdn Bhd',
    facility: 'Mineral fertiliser facility',
    scope: 'Fire engineering',
    image: '/images/projects/real-yara.webp',
    imageAlt: 'Yara facility at Port Klang',
  },
  {
    id: 'airfoil',
    name: 'Airfoil Service Centre',
    sectors: ['Fire Industrial'],
    location: 'Kota Damansara, Selangor',
    owner: 'Airfoil Services Sdn Bhd',
    facility: 'Aircraft engine centre',
    scope: 'Fire engineering',
    image: '/images/projects/real-airfoil.webp',
    imageAlt: 'Airfoil Services aircraft engine centre',
  },
  {
    id: 'wei-tat',
    name: 'Wei Tat Feedmill',
    sectors: ['Fire Industrial'],
    location: 'Port Klang, Selangor',
    owner: 'Wei Tat Poultry Farm Sdn Bhd',
    facility: 'Animal feedmill plant',
    scope: 'Fire engineering',
    image: '/images/projects/real-wei-tat.webp',
    imageAlt: 'Wei Tat feedmill plant at Port Klang',
  },
  {
    id: 'yong-fong-rubber',
    name: 'Yong Fong Rubber Industries Sdn Bhd',
    sectors: ['Fire Industrial'],
    location: 'Port Klang, Selangor',
    owner: 'Yong Fong Rubber Industries Sdn Bhd',
    facility: 'Rubber manufacturing plant',
    scope: 'Fire engineering',
    image: '/images/projects/YONG FONG.webp',
    imageAlt: 'Yong Fong Rubber Industries plant in Port Klang',
  },
  {
    id: 'karich',
    name: 'Karich Sdn Bhd',
    sectors: ['Fire Industrial'],
    location: 'Klang, Selangor',
    owner: 'Karich Sdn Bhd',
    facility: 'Manufacturing plant',
    scope: 'Fire engineering',
    image: '/images/projects/KARICH.webp',
    imageAlt: 'Karich Sdn Bhd facility in Klang',
  },
  {
    id: 'pasaraya-sri-kassim',
    name: 'Pasaraya Sri Kassim Sdn Bhd',
    sectors: ['Commercial'],
    location: 'Sg. Besi, Kuala Lumpur',
    owner: 'Pasaraya Sri Kassim Sdn Bhd',
    facility: 'Supermarket',
    scope: 'Fire engineering',
    image: '/images/projects/real-pasaraya-sri-kassim.webp',
    imageAlt: 'Pasaraya Sri Kassim supermarket signage at Sg. Besi',
  },
  {
    id: 'kelana-centre-point',
    name: 'Kelana Centre Point',
    sectors: ['Commercial'],
    location: 'Petaling Jaya, Selangor',
    owner: 'Kelana Centre Point',
    facility: 'Commercial office building',
    scope: 'Fire engineering',
    image: '/images/projects/real-kelana-centre-point.webp',
    imageAlt: 'Kelana Centre Point office building in Petaling Jaya',
  },
  {
    id: 'technology-park-malaysia',
    name: 'Technology Park Malaysia',
    sectors: ['Commercial'],
    location: 'Bukit Jalil, Kuala Lumpur',
    owner: 'Technology Park Malaysia',
    facility: 'Commercial office building',
    scope: 'Fire engineering',
    image: '/images/projects/real-technology-park-malaysia.webp',
    imageAlt: 'Technology Park Malaysia building in Bukit Jalil',
  },
  {
    id: 't1-bundasan',
    name: 'T1 Bundasan',
    sectors: ['Commercial'],
    location: 'Kota Kinabalu, Sabah',
    owner: 'T1 Bundasan',
    facility: 'Commercial building',
    scope: 'Fire engineering',
    image: '/images/projects/real-t1-bundasan.webp',
    imageAlt: 'T1 Bundasan commercial building in Kota Kinabalu',
  },
  {
    id: 'kossan-tower',
    name: 'Kossan Tower',
    sectors: ['Commercial'],
    location: 'Setia Alam, Selangor',
    owner: 'Kossan Tower',
    facility: 'Commercial office tower',
    scope: 'Fire engineering',
    image: '/images/projects/real-kossan-tower.webp',
    imageAlt: 'Kossan Tower office building in Setia Alam',
  },
  {
    id: 'petronas-chemicals-fertiliser-kedah',
    name: 'Petronas Chemicals Fertiliser Kedah Sdn Bhd',
    sectors: ['Electrical Industrial'],
    location: 'Kedah',
    owner: 'Petronas',
    facility: 'Chemical factory',
    scope: 'Electrical engineering',
    image: '/images/projects/petronas-chemicals-fertiliser-kedah.webp',
    imageAlt: 'Petronas Chemicals Fertiliser Kedah Sdn Bhd facility',
  },
  {
    id: 'pmb-aluminium',
    name: 'PMB Aluminum Sdn Bhd',
    sectors: ['Electrical Industrial'],
    location: 'Kapar, Klang',
    owner: 'Press Metal Aluminium Holding Bhd',
    facility: 'Aluminium factory',
    scope: 'Electrical engineering',
    image: '/images/projects/pmb-aluminium.webp',
    imageAlt: 'PMB Aluminum Sdn Bhd factory in Kapar',
  },
  {
    id: 'synergy-pipes-and-parts',
    name: 'Synergy Pipes and Parts Sdn Bhd',
    sectors: ['Electrical Industrial'],
    location: 'Ipoh, Perak',
    owner: 'Synergy Pipes and Parts Sdn Bhd',
    facility: 'Manufacturing plant',
    scope: 'Electrical engineering',
    image: '/images/projects/synergy-pipes-and-parts.webp',
    imageAlt: 'Synergy Pipes and Parts Sdn Bhd facility in Ipoh',
  },
  {
    id: 'top-mech-provincial',
    name: 'Top Mech Provincial Sdn Bhd',
    sectors: ['Electrical Industrial'],
    location: 'Klang, Selangor',
    owner: 'Top Mech Provincial Sdn Bhd',
    facility: 'Equipment industry',
    scope: 'Electrical engineering',
    image: '/images/projects/top-mech-provincial.webp',
    imageAlt: 'Top Mech Provincial Sdn Bhd facility in Klang',
  },
  {
    id: 'setiahub',
    name: 'SetiaHub Sdn Bhd',
    sectors: ['Electrical Industrial'],
    location: 'Banting, Klang',
    owner: 'SetiaHub Sdn Bhd',
    facility: 'Warehouse facility',
    scope: 'Electrical engineering',
    image: '/images/projects/setiahub.webp',
    imageAlt: 'SetiaHub Sdn Bhd facility in Banting',
  },
  {
    id: 'yong-fong-reclaimed-rubber',
    name: 'Yong Fong Reclaimed Rubber Sdn Bhd',
    sectors: ['Electrical Industrial'],
    location: 'Klang, Selangor',
    owner: 'Yong Fong Reclaimed Rubber Sdn Bhd',
    facility: 'Plastic factory',
    scope: 'Electrical engineering',
    image: '/images/projects/yong-fong-reclaimed-rubber.webp',
    imageAlt: 'Yong Fong Reclaimed Rubber Sdn Bhd factory in Klang',
  },
  {
    id: 'kurz-production',
    name: 'Kurz Production',
    sectors: ['Electrical Industrial'],
    location: 'Bota, Perak',
    owner: 'Kurz Group',
    facility: 'Stamping foil production facility',
    scope: 'Electrical engineering',
    image: '/images/projects/kurz-production.webp',
    imageAlt: 'Kurz Production facility in Bota',
  },
  {
    id: 'ann-yak-siong-hardware',
    name: 'Ann Yak Siong Hardware Sdn Bhd',
    sectors: ['Electrical Industrial'],
    location: 'Klang, Selangor',
    owner: 'Ann Yak Siong Hardware Sdn Bhd',
    facility: 'Warehouse facility',
    scope: 'Electrical engineering',
    image: '/images/projects/ann-yak-siong-hardware.webp',
    imageAlt: 'Ann Yak Siong Hardware Sdn Bhd facility in Klang',
  },
  {
    id: 'lam-soon-m-berhad',
    name: 'Lam Soon (M) Berhad',
    sectors: ['Electrical Industrial'],
    location: 'Ipoh, Perak',
    owner: 'Lam Soon (M) Berhad',
    facility: 'Manufacturing plant',
    scope: 'Electrical engineering',
    image: '/images/projects/lam-soon-m-berhad.webp',
    imageAlt: 'Lam Soon (M) Berhad facility in Ipoh',
  },
]

/** Featured project shown on the homepage and the Projects page. */
export const featuredProject = {
  ...projects[0],
  text: 'One of the group’s most recent major deliveries — fire and electrical engineering for Press Metal’s aluminium manufacturing plant in Klang, taken through design coordination, installation and commissioning.',
}

/** Gallery of representative imagery (stock), clearly labelled in the UI. */
export interface GalleryItem {
  id: string
  image: string
  caption: string
  category: 'Fire protection' | 'Mechanical & electrical' | 'Facilities'
}

export const gallery: GalleryItem[] = [
  { id: 'g1', image: '/images/projects/fp-pumproom.webp', caption: 'Fire-main and pump-room pipework', category: 'Fire protection' },
  { id: 'g2', image: '/images/projects/fp-sprinkler.webp', caption: 'Sprinkler protection at ceiling level', category: 'Fire protection' },
  { id: 'g3', image: '/images/projects/fp-alarm.webp', caption: 'Fire-alarm and control equipment', category: 'Fire protection' },
  { id: 'g4', image: '/images/projects/fp-switchgear.webp', caption: 'Electrical switchgear and distribution', category: 'Mechanical & electrical' },
  { id: 'g5', image: '/images/projects/fp-chiller.webp', caption: 'Mechanical plant room', category: 'Mechanical & electrical' },
  { id: 'g6', image: '/images/projects/fp-ducting.webp', caption: 'Coordinated overhead MEP services', category: 'Mechanical & electrical' },
  { id: 'g7', image: '/images/projects/gallery-industrial.webp', caption: 'Industrial production environment', category: 'Facilities' },
  { id: 'g8', image: '/images/projects/gallery-data.webp', caption: 'Data-centre white space', category: 'Facilities' },
]

export const galleryDisclaimer =
  'Representative imagery shown in this gallery. Project photographs above are from DKSM’s published track record.'

/**
 * Client logo wall — logos only, per client direction. Sourced from the
 * client list published on DKSM's existing website.
 */
export interface ClientLogo {
  name: string
  image: string
}

export const clientLogos: ClientLogo[] = [
  { name: 'PETRONAS', image: '/images/clients/petronas.png' },
  { name: 'Genting Malaysia', image: '/images/clients/genting.png' },
  { name: 'Toyota', image: '/images/clients/toyota.png' },
  { name: 'Volvo', image: '/images/clients/volvo.png' },
  { name: 'Nissan', image: '/images/clients/nissan.png' },
  { name: 'Yamaha', image: '/images/clients/yamaha.png' },
  { name: 'MRT Corp', image: '/images/clients/mrt-corp.png' },
  { name: 'Press Metal', image: '/images/clients/press-metal.png' },
  { name: 'Kossan', image: '/images/clients/kossan.png' },
  { name: 'DRB-HICOM', image: '/images/clients/drb-hicom.png' },
  { name: 'HICOM', image: '/images/clients/hicom.png' },
  { name: 'Decathlon', image: '/images/clients/decathlon.png' },
  { name: 'Louis Vuitton', image: '/images/clients/louis-vuitton.png' },
  { name: 'British American Tobacco', image: '/images/clients/british-american.png' },
  { name: 'Al Rajhi Bank', image: '/images/clients/al-rajhi.png' },
  { name: 'Linde', image: '/images/clients/linde.png' },
  { name: 'Yara', image: '/images/clients/yara.png' },
  { name: 'Autoliv', image: '/images/clients/autoliv.png' },
  { name: 'AIROD', image: '/images/clients/airod.png' },
  { name: 'Universiti Kebangsaan Malaysia', image: '/images/clients/ukm.png' },
  { name: 'Eu Yan Sang', image: '/images/clients/eu-yan-sang.png' },
  { name: 'Khind', image: '/images/clients/khind.png' },
  { name: 'Joven', image: '/images/clients/joven.png' },
  { name: 'Bata', image: '/images/clients/bata.png' },
  { name: 'Eco-Shop', image: '/images/clients/eco-shop.png' },
  { name: 'Mycron Steel', image: '/images/clients/mycron.png' },
  { name: 'Leon Fuat', image: '/images/clients/leon-fuat.png' },
  { name: 'Synergy Pipes & Parts', image: '/images/clients/synergy.png' },
  { name: 'Kolej WIT', image: '/images/clients/kolej-wit.png' },
  { name: 'Freight Management', image: '/images/clients/freight-management.png' },
  { name: 'SKK', image: '/images/clients/skk.png' },
  { name: 'Seamaster', image: '/images/clients/seamaster.png' },
  { name: 'Ukai', image: '/images/clients/ukai.png' },
]
