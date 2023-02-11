import CodeMirror from '@uiw/react-codemirror'
import styles from '../FetchSection.module.scss'
import { createTheme } from '@uiw/codemirror-themes'
import { json } from '@codemirror/lang-json'
import { ContentCopy, Update } from '@mui/icons-material'
import { Button, IconButton, Typography } from '@mui/material'
import { tags } from '@lezer/highlight'
import { Text_Me_One } from '@next/font/google'

const TextMeOne = Text_Me_One({ weight: '400', subsets: ['latin'] })

const extensions = [json()]
const holocronTheme = createTheme({
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

/** React CodeMirror library with configuration and styling */
export default function JSONMirror({ data, responseTime }: { data: string; responseTime: number }) {
  return (
    <CodeMirror
      readOnly
      value={data}
      height="42rem"
      theme={holocronTheme}
      extensions={extensions}
      className={styles.CodeMirror}
      basicSetup={{
        highlightActiveLineGutter: false,
        foldGutter: false,
        highlightActiveLine: false,
      }}
    >
      {responseTime > 0 && (
        <div className={styles.CodeMirrorOptions}>
          {/* <Button variant="square" size="small">
            <Update />
            <Typography variant="subtitle1">
              {new Date(responseTime).getMilliseconds()}ms
            </Typography>
          </Button>
          <IconButton size="small" className={styles.IconButton}>
            <ContentCopy />
          </IconButton> */}
          <div className={styles.ResponseTime}>
            <Update />
            <Typography variant="subtitle1">
              {new Date(responseTime).getMilliseconds()}ms
            </Typography>
          </div>
          <div className={styles.CopyClipboard}>
            {/* <IconButton>
              <ContentCopy />
            </IconButton> */}
            <ContentCopy
              onClick={() => {
                navigator.clipboard.writeText(data)
                // setTimeout(() => , 500)
              }}
            />
          </div>
        </div>
      )}
    </CodeMirror>
  )
}
