import { selectAll as originalSelectAll } from 'prosemirror-commands'
import { RawCommands } from '../types'

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    selectAll: {
      /**
       * Select the whole document.
       */
      selectAll: () => ReturnType,
    }
  }
}

export const selectAll: RawCommands['selectAll'] = () => ({ state, dispatch }) => {
  return originalSelectAll(state, dispatch)
}
