import CodeMirror from '@uiw/react-codemirror'
// import { createTheme } from '@uiw/codemirror-themes'
import { json } from '@codemirror/lang-json'

// Add custom theme - can we add this to a layout.tsx to prevent re-rendering?
// Add CSS gradient border etc.

export default function JSONMirror({ data }: { data: string }) {
  return <CodeMirror value={data} height="200px" extensions={[json()]} readOnly />
}
