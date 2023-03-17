import CodeMirror from '@uiw/react-codemirror'
import styles from '../FetchSection.module.scss'
import { createTheme } from '@uiw/codemirror-themes'
import { json } from '@codemirror/lang-json'
import { ContentCopy, FileCopy, Update } from '@mui/icons-material'
import { Button, CircularProgress, IconButton, Tooltip, Typography } from '@mui/material'
import { tags } from '@lezer/highlight'

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

type JSONMirrorParams = { data: string; isLoading: boolean; responseTime: number; dataURL: string }

/** React CodeMirror library with configuration and styling */
export default function JSONMirror({ data, isLoading, responseTime, dataURL }: JSONMirrorParams) {
  return (
    <CodeMirror
      readOnly
      value={isLoading ? undefined : data}
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
      {isLoading && <CircularProgress className={styles.LoadingCircle} />}

      {responseTime > 0 && (
        <div className={styles.CodeMirrorOptions}>
          <Tooltip arrow title="API Response Time">
            <Button variant="square" size="small">
              <Update />
              <Typography variant="subtitle1">
                {new Date(responseTime).getMilliseconds()}ms
              </Typography>
            </Button>
          </Tooltip>

          <Tooltip arrow title="Copy URL to Clipboard">
            <IconButton
              size="small"
              className={styles.IconButton}
              onClick={() => navigator.clipboard.writeText(dataURL)}
            >
              <ContentCopy />
            </IconButton>
          </Tooltip>

          <Tooltip arrow title="Copy JSON to Clipboard">
            <IconButton
              size="small"
              className={styles.IconButton}
              onClick={() => navigator.clipboard.writeText(data)}
            >
              <FileCopy />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </CodeMirror>
  )
}
