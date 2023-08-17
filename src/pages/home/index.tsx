import FetchSection from './FetchContainer/FetchSection'

import { HolocronCube } from '@components'

const css = {
  background: "w-screen bg-[url('/illustrations/lines.svg')] bg-cover bg-no-repeat",
  title: {
    container:
      'flex grow items-center flex-col lg:flex-row justify-center lg:justify-evenly gap-8 pt-14 px-12 animate-fadeIn h-[calc(100vh-8rem)]',
    text: 'whitespace-normal md:whitespace-nowrap select-none text-5xl lg:text-7xl xl:text-8xl 4xl:text-9xl text-center lg:text-left',
    breakpoint: 'hidden lg:block',
    breakpointReversed: 'block lg:hidden',
    archivesText:
      'font-jedi bg-complement bg-clip-text underline decoration-white decoration-1 underline-offset-8 [-webkit-text-fill-color:transparent]',
  },
}

/** A collection of landing page elements and an API fetch playground */
export default function HomePage() {
  return (
    <section className={css.background}>
      <div className={css.title.container}>
        <p className={css.title.text}>
          A modern API <br className={css.title.breakpoint} /> for the{' '}
          <br className={css.title.breakpointReversed} />
          <span className={css.title.archivesText}>Jedi Archives</span>
        </p>
        <HolocronCube />
      </div>
      <FetchSection />
    </section>
  )
}
