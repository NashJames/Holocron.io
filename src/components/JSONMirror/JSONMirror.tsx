import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import { tags } from '@lezer/highlight'
import { ContentCopy, FileCopy, Update } from '@mui/icons-material'
import { Button, CircularProgress, IconButton, Tooltip, Typography } from '@mui/material'
import { createTheme } from '@uiw/codemirror-themes'

import { tw } from '@lib/tailwind-merge'

const css = {
  root: tw(
    'flex flex-col mt-4 shadow-2xl relative z-10 text-sm sm:text-base',
    'bg-gradient-to-b from-[#00FFFF] to-transparent px-1',
  ),
  loadingCircle: 'absolute self-center my-auto z-20',
  actions: {
    root: 'flex gap-2 absolute self-end mt-0 sm:mt-2 mr-2',
    button: 'lowercase gap-2',
    icon: 'h-5 w-5',
    iconButtons: 'h-7 w-7 border border-solid border-gray-500',
  },
}

const extensions = [json()]
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

type JSONMirrorParams = { data: string; isLoading: boolean; responseTime: number; dataURL: string }

/** React CodeMirror library with configuration and styling */
export function JSONMirror({ data, isLoading, responseTime, dataURL }: JSONMirrorParams) {
  return (
    <CodeMirror
      readOnly
      value={isLoading ? undefined : data}
      minHeight="30rem"
      theme={mirrorTheme}
      extensions={extensions}
      className={tw(css.root, isLoading && 'justify-center')}
      basicSetup={{
        highlightActiveLineGutter: false,
        foldGutter: false,
        highlightActiveLine: false,
      }}
    >
      {isLoading ? (
        <CircularProgress className={css.loadingCircle} />
      ) : (
        <div className={css.actions.root}>
          <Tooltip arrow title="API Response Time">
            <Button variant="square" size="small" className={css.actions.button}>
              <Update className={css.actions.icon} />
              <Typography variant="subtitle1">
                {new Date(responseTime).getMilliseconds()}ms
              </Typography>
            </Button>
          </Tooltip>

          <Tooltip arrow title="Copy URL to Clipboard">
            <IconButton
              size="small"
              className={css.actions.iconButtons}
              onClick={() => navigator.clipboard.writeText(dataURL)}
            >
              <ContentCopy className={css.actions.icon} />
            </IconButton>
          </Tooltip>

          <Tooltip arrow title="Copy JSON to Clipboard">
            <IconButton
              size="small"
              className={css.actions.iconButtons}
              onClick={() => navigator.clipboard.writeText(data)}
            >
              <FileCopy className={css.actions.icon} />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </CodeMirror>
  )
}
