import { Link } from 'react-router-dom'
import { useBreadcrumbSchema, usePageMeta } from '../lib/meta'
import { useInView } from '../lib/motion'
import { serviceRegion } from '../data/company'
import CareersForm from '../components/CareersForm'
import { Breadcrumbs, PageHero, SectionHeading } from '../components/primitives'

const BREADCRUMB = [
  { name: 'Home', path: '/' },
  { name: 'Careers', path: '/careers' },
]

const CAREERS_EMAIL = 'krethiga@dksm.com.my'

const VACANCIES = [
  'Tender manager (Fire)',
  'Tender executive (Fire)',
  'Account executive',
  'Safety health officer (SHO)',
  'Project engineer (Fire)',
]

function CareersDetails() {
  const ref = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className="flex flex-col gap-8">
      <div className="reveal">
        <h2 className="tech-label text-brand">Job vacancies and career announcements</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-graphite">
          DKSM is hiring for the positions below. Introduce yourself using the form — DKSM also keeps
          applications on file for upcoming openings.
        </p>
        <ul className="mt-4 space-y-2">
          {VACANCIES.map((v) => (
            <li key={v} className="flex items-start gap-3 text-[15px] text-graphite">
              <span aria-hidden="true" className="mt-[9px] h-2 w-2 shrink-0 rotate-45 bg-brand" />
              {v}
            </li>
          ))}
        </ul>
      </div>
      <div className="reveal">
        <h2 className="tech-label text-brand">HR enquiries</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-graphite">
          <a href={`mailto:${CAREERS_EMAIL}`} className="underline decoration-line underline-offset-4 hover:text-brand">
            {CAREERS_EMAIL}
          </a>
        </p>
      </div>
      <div className="reveal">
        <h2 className="tech-label text-brand">Where DKSM works</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-graphite">{serviceRegion}</p>
      </div>
    </div>
  )
}

export default function Careers() {
  usePageMeta({
    title: 'Careers at DKSM Group — Join Our Engineering Team',
    description:
      'Explore career opportunities with DKSM Group — introduce yourself for upcoming fire-protection and MEP engineering, site and support roles.',
    path: '/careers',
  })
  useBreadcrumbSchema(BREADCRUMB)

  return (
    <>
      <PageHero
        image="/images/backgrounds/hero-contact.webp"
        imageAlt=""
        eyebrow="Careers"
        title="Build Your Career With DKSM Group"
        lead="Join the engineers, supervisors and technicians who plan, install and maintain fire-protection and MEP systems across Malaysia."
      />
      <Breadcrumbs items={BREADCRUMB} />

      {/* Enquiry form + details */}
      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Job application"
              title="Tell us about yourself"
              lead="No current vacancy fits? Introduce yourself anyway — DKSM keeps applications on file as the team grows."
            />
            <div className="mt-10">
              <CareersForm />
            </div>
          </div>
          <aside className="lg:border-l lg:border-line lg:pl-10">
            <CareersDetails />
          </aside>
        </div>
      </section>

      <section className="rule-t bg-white py-16 md:py-20">
        <div className="shell text-center">
          <p className="text-[14.5px] text-steel">
            Have a project enquiry instead?{' '}
            <Link to="/contact" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
              Visit the Contact Us page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
