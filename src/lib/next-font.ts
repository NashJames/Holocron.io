import { IBM_Plex_Mono, Oxanium, Poiret_One, Text_Me_One } from 'next/font/google'

// Default
export const TextMeOneFont = Text_Me_One({
  weight: '400',
  subsets: ['latin'],
})

// Extras
export const OxaniumFont = Oxanium({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oxanium',
})
export const PoiretOneFont = Poiret_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poiret-one',
})
export const IBMPlexMonoFont = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  preload: false, // Not immediately visible due to dynamic imports and tooltips
})
