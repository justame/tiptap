import { RawCommands } from '../types'

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    scrollIntoView: {
      /**
       * Scroll the selection into view.
       */
      scrollIntoView: () => ReturnType,
    }
  }
}

export const scrollIntoView: RawCommands['scrollIntoView'] = () => ({ tr, dispatch }) => {
  if (dispatch) {
    tr.scrollIntoView()
  }

  return true
}
