import CodeMirror from '@uiw/react-codemirror'
import styles from '../FetchSection.module.scss'
import { createTheme } from '@uiw/codemirror-themes'
import { json } from '@codemirror/lang-json'
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

/** React CodeMirror library with configuration and styling */
export default function JSONMirror({ data }: { data: string }) {
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
    />
  )
}
