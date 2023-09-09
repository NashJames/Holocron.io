'use client'

import { Card } from '@nextui-org/react'
import { useEffect } from 'react'
import { useAnimate, usePresence } from 'framer-motion'

import EasterEggBasketIcon from '@public/icons/EasterEggBasket'

const css = {
  card: 'flex flex-row justify-center w-fit bg-warning z-50 py-1 px-2 fixed right-2',
  icon: 'w-10 mr-1',
  text: 'font-title text-black',
  subheading: 'text-base font-bold',
}

/** An animated toast pop-up to display a location hint for an easter egg */
export default function EasterEggToast() {
  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const animateCard = async () => {
      if (isPresent) {
        await animate(scope.current, { opacity: 0, bottom: '-4rem' })
        await animate(scope.current, { opacity: 1, bottom: '0.5rem' }, { duration: 0.75 })
      } else {
        await animate(scope.current, { opacity: 1, bottom: '0.5rem' })
        await animate(scope.current, { opacity: 0, bottom: '-4rem' }, { duration: 0.75 })
        safeToRemove()
      }
    }

    if (scope) animateCard()
  }, [isPresent, animate, safeToRemove, scope])

  return (
    <Card ref={scope} className={css.card}>
      <EasterEggBasketIcon className={css.icon} />
      <div className={css.text}>
        <p className={css.subheading}>Psst!</p>
        <p>Check out the browser console for an easter egg!</p>
      </div>
    </Card>
  )
}
