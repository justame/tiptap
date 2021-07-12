import { undoInputRule as originalUndoInputRule } from 'prosemirror-inputrules'
import { RawCommands } from '../types'

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    undoInputRule: {
      /**
       * Undo an input rule.
       */
      undoInputRule: () => ReturnType,
    }
  }
}

export const undoInputRule: RawCommands['undoInputRule'] = () => ({ state, dispatch }) => {
  return originalUndoInputRule(state, dispatch)
}
