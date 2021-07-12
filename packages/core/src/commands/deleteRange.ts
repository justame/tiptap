import { RawCommands, Range } from '../types'

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    deleteRange: {
      /**
       * Delete a given range.
       */
      deleteRange: (range: Range) => ReturnType,
    }
  }
}

export const deleteRange: RawCommands['deleteRange'] = range => ({ tr, dispatch }) => {
  const { from, to } = range

  if (dispatch) {
    tr.delete(from, to)
  }

  return true
}
