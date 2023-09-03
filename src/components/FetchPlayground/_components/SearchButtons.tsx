import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button, ButtonProps, Tooltip } from '@nextui-org/react'

const css = {
  root: 'flex gap-2 -mb-8 mt-1 [&_button]:h-7',
  icons: 'w-7 [&_svg]:w-5',
}

const iconButtonProps = {
  isIconOnly: true,
  size: 'sm' as ButtonProps['size'],
  className: css.icons,
}

interface SearchButtonsParams {
  submitSearch: () => void
  resetSearch: () => void
  textFieldEmpty: boolean
}

/** Mini component to group the 'label' buttons on the searchbar */
export const SearchButtons = ({
  submitSearch,
  resetSearch,
  textFieldEmpty,
}: SearchButtonsParams) => {
  return (
    <div className={css.root}>
      <Tooltip showArrow closeDelay={2000} content="Click here or press the 'Enter' key">
        <Button variant="ghost" size="sm" type="submit" onClick={submitSearch}>
          SUBMIT
        </Button>
      </Tooltip>
      {textFieldEmpty ? (
        <Tooltip showArrow closeDelay={2000} content="Press the '/' key to begin searching">
          <Button variant="bordered" disableRipple {...iconButtonProps}>
            <kbd aria-hidden>/</kbd>
          </Button>
        </Tooltip>
      ) : (
        <Tooltip showArrow closeDelay={2000} content="Click here to clear the search bar">
          <Button variant="ghost" type="reset" onClick={resetSearch} {...iconButtonProps}>
            <XMarkIcon className="w-5" />
          </Button>
        </Tooltip>
      )}
    </div>
  )
}
