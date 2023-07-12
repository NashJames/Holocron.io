import { ClassNameValue, twMerge } from 'tailwind-merge'

/**
 * Short-hand function call for tailwind-merge
 * @see https://github.com/dcastil/tailwind-merge#tailwind-merge
 */
export function tw(...args: ClassNameValue[]): string {
  return twMerge(args)
}
