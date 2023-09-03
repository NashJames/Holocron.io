'use client'

import { ClockIcon, DocumentDuplicateIcon, LinkIcon } from '@heroicons/react/24/outline'
import { Button, ButtonProps, Spinner, Tooltip } from '@nextui-org/react'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import { tags } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'

import { tw } from '@lib/tailwind-merge'

const css = {
  root: tw(
    'flex flex-col mt-4 shadow-2xl relative z-10 text-sm sm:text-base',
    'bg-gradient-to-b from-[#00FFFF] to-transparent px-1',
  ),
  loadingCircle: 'absolute self-center my-auto z-20',
  actions: {
    root: 'flex gap-2 absolute self-end mt-0 sm:mt-2 mr-2 z-20 font-mono',
    button: 'lowercase gap-2',
    icon: 'h-5 w-5',
    iconButtons: 'h-7 w-7 border border-solid border-gray-500',
  },
}

const mirrorExtensions = [json()]
const mirrorSetup = {
  highlightActiveLineGutter: false,
  highlightActiveLine: false,
  foldGutter: false,
}
const mirrorTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#141414',
    foreground: '#ff8080',
    selection: '#282828',
    caret: '#141414',
  },
  styles: [
    { tag: tags.string, color: '#80ffff' },
    { tag: tags.bracket, color: '#8088ff' },
    { tag: tags.squareBracket, color: '#ff80ff' },
  ],
})

const iconButtonProps = {
  isIconOnly: true,
  variant: 'ghost' as ButtonProps['variant'],
  size: 'sm' as ButtonProps['size'],
  className: css.actions.iconButtons,
}

type JSONMirrorParams = { data: string; isLoading: boolean; responseTime: number; dataURL: string }

/** React CodeMirror library with configuration and styling */
export default function JSONMirror({ data, isLoading, responseTime, dataURL }: JSONMirrorParams) {
  return (
    <CodeMirror
      readOnly
      minHeight="30rem"
      theme={mirrorTheme}
      basicSetup={mirrorSetup}
      extensions={mirrorExtensions}
      value={isLoading ? undefined : data}
      className={tw(css.root, isLoading && 'justify-center')}
    >
      {isLoading ? (
        <Spinner className={css.loadingCircle} />
      ) : (
        <div className={css.actions.root}>
          <Tooltip showArrow closeDelay={2000} content="API Response Time (<5ms cached)">
            <Button variant="bordered" disableRipple size="sm" className={css.actions.button}>
              <ClockIcon className={css.actions.icon} />
              <h5>{new Date(responseTime).getMilliseconds()}ms</h5>
            </Button>
          </Tooltip>

          <Tooltip showArrow closeDelay={2000} content="Copy request URL to Clipboard">
            <Button onClick={() => navigator.clipboard.writeText(dataURL)} {...iconButtonProps}>
              <LinkIcon className={css.actions.icon} />
            </Button>
          </Tooltip>

          <Tooltip showArrow closeDelay={2000} content="Copy JSON to Clipboard">
            <Button onClick={() => navigator.clipboard.writeText(data)} {...iconButtonProps}>
              <DocumentDuplicateIcon className={css.actions.icon} />
            </Button>
          </Tooltip>
        </div>
      )}
    </CodeMirror>
  )
}
