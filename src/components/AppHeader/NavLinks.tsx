'use client'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Button, Tooltip } from '@nextui-org/react'

import { NavLinkType } from './AppHeader'

const css = {
  tooltip: 'font-mono',
  button: 'overflow-visible',
  externalLinkIcon: 'absolute w-3.5 -mr-7 -mt-7',
}

/** Collection of links to be rendered in the AppHeader */
export default function NavLinks({ links }: { links: NavLinkType[] }) {
  return links.map(([label, icon, isExternalLink, link]) => (
    <Tooltip showArrow closeDelay={2000} key={label} content={label} className={css.tooltip}>
      <Button
        isIconOnly
        variant="ghost"
        className={css.button}
        onClick={() => window.open(link, isExternalLink ? '_blank' : '_self')}
      >
        {icon}
        {isExternalLink && <ArrowTopRightOnSquareIcon className={css.externalLinkIcon} />}
      </Button>
    </Tooltip>
  ))
}
