/**
 * Determines if a scrollbar is visible on the page.
 * Allows handling MacOS disappearing scrollbars for webkit browsers.
 */
export function getScrollbarVisible(): boolean {
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  document.body.append(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.append(inner)

  const widthWithScroll = inner.offsetWidth
  outer.remove()

  const scrollbarVisible = widthNoScroll - widthWithScroll > 0
  return scrollbarVisible
}
