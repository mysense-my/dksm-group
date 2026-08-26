import { credentials, credentialsDisclaimer } from '../data/credentials'
import { asset } from '../lib/asset'

/**
 * Restrained logo wall: consistent tile sizing, quiet borders, no
 * recolouring or cropping of the supplied organisation logos.
 */
export default function CredentialWall({ limit }: { limit?: number }) {
  const items = limit ? credentials.slice(0, limit) : credentials
  return (
    <div>
      <ul className="grid grid-cols-3 items-center gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-6">
        {items.map((c) => (
          <li key={c.id} className="flex items-center justify-center">
            <img
              src={asset(c.image)}
              alt={`${c.org} — ${c.category.toLowerCase()}`}
              title={c.category}
              loading="lazy"
              className="max-h-12 w-auto max-w-full object-contain grayscale-[35%] transition-all duration-300 hover:grayscale-0"
            />
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-3xl text-[12.5px] leading-relaxed text-steel">{credentialsDisclaimer}</p>
    </div>
  )
}
