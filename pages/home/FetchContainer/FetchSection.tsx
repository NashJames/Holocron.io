import useSWR from 'swr'
import Image from 'next/image'
import { useState } from 'react'
import { fetchAPI } from './_data/fetchAPI'
import styles from './FetchSection.module.scss'
import JSONMirror from './_components/JSONMirror'
import SearchAPI from './_components/SearchBar'
import DeathStarSVG from '@public/illustrations/death-star-bg.svg'
import { Typography } from '@mui/material'

export default function FetchSection() {
  // const scrollTipRef = useRef<HTMLInputElement>(null)
  const [url, setURL] = useState<string>('https://swapi.dev/api/starships/10/')
  const { data, error } = useSWR(url, fetchAPI)

  // useEffect(() => {
  //   const fadeScrollTip = () => {
  //     if (scrollTipRef.current) scrollTipRef.current.style.opacity = '0'
  //   }

  //   document.addEventListener('scroll', fadeScrollTip, { once: true })
  // })

  return (
    <section className={styles.content}>
      <Typography variant="h4">Take a look at the data below...</Typography>

      <SearchAPI searchRequest={(request) => setURL(request)} />
      <JSONMirror data={data ?? error} />

      {/* 
      <div id="scrollTip" className={styles.scrollTip} ref={scrollTipRef}>
        <Typography variant="h5">Scroll</Typography>
        <span />
      </div>
       */}

      <Image
        alt={'An illustration of the Death Star'}
        className={styles.DeathStar}
        src={DeathStarSVG}
        draggable={false}
      />
    </section>
  )
}
