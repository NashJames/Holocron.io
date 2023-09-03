import Image from 'next/image'

import { FetchPlayground, HolocronCube } from '@components'
import { fetchAPI } from '@data/fetchAPI'
import { tw } from '@lib/tailwind-merge'
import { xWingAscii } from '@public/asciiArt/x-wing'
import DeathStarSVG from '@public/illustrations/death-star-bg.svg'

const css = {
  background: "w-screen bg-[url('/illustrations/lines.svg')]",
  title: {
    section: tw(
      'flex grow items-center flex-col lg:flex-row justify-center lg:justify-evenly',
      'gap-8 pt-14 px-12 animate-fadeInUp h-[calc(100vh-8rem)]',
    ),
    text: {
      all: tw(
        'whitespace-normal md:whitespace-nowrap select-none text-center lg:text-left',
        'text-5xl lg:text-7xl xl:text-8xl 4xl:text-9xl',
      ),
      breakpoint: 'hidden lg:block',
      breakpointReversed: 'block lg:hidden',
      jediArchives: tw(
        'font-jediArchives bg-complement bg-clip-text [-webkit-text-fill-color:transparent]',
        'underline decoration-white decoration-1 underline-offset-8',
      ),
    },
  },
  fetchPlayground: {
    section: 'flex flex-col items-center w-[90vw] mx-auto rounded-t-3xl bg-fetchPlayground',
    content: 'py-12 w-240 max-w-[80vw]',
    deathStar: tw(
      'absolute top-[calc(100vh+7rem)] -right-2 w-[25vw] h-[25vw] max-w-112 max-h-112',
      '[clip-path:inset(0_calc(5vw+5px)_0_0)] [mask-image:linear-gradient(to bottom,rgb(0_0_0_/_90%),transparent)]',
    ),
  },
}

/** A collection of landing page elements and an API fetch playground */
export default async function Page() {
  if (process.env.NODE_ENV === 'production') console.log(xWingAscii)

  // Fallback API request cached on each incremental build
  const staticData = await fetchAPI('https://swapi.dev/api/starships/10/')

  return (
    <div className={css.background}>
      <section className={css.title.section}>
        <p className={css.title.text.all}>
          A modern API <br className={css.title.text.breakpoint} /> for the{' '}
          <br className={css.title.text.breakpointReversed} />
          <span className={css.title.text.jediArchives}>Jedi Archives</span>
        </p>
        <HolocronCube />
      </section>

      <section className={css.fetchPlayground.section}>
        <div className={css.fetchPlayground.content}>
          <FetchPlayground fallbackData={staticData} />

          <Image
            alt={'An illustration of the Death Star'}
            className={css.fetchPlayground.deathStar}
            src={DeathStarSVG}
            draggable={false}
          />
        </div>
      </section>
    </div>
  )
}
