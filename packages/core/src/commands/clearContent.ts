import { RawCommands } from '../types'

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    clearContent: {
      /**
       * Clear the whole document.
       */
      clearContent: (emitUpdate?: boolean) => ReturnType,
    }
  }
}

export const clearContent: RawCommands['clearContent'] = (emitUpdate = false) => ({ commands }) => {
  return commands.setContent('', emitUpdate)
}
