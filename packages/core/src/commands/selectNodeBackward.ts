import { selectNodeBackward as originalSelectNodeBackward } from 'prosemirror-commands'
import { RawCommands } from '../types'

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    selectNodeBackward: {
      /**
       * Select a node backward.
       */
      selectNodeBackward: () => ReturnType,
    }
  }
}

export const selectNodeBackward: RawCommands['selectNodeBackward'] = () => ({ state, dispatch }) => {
  return originalSelectNodeBackward(state, dispatch)
}
