import { NodeSelection } from 'prosemirror-state'
import minMax from '../utilities/minMax'
import { RawCommands } from '../types'

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    setNodeSelection: {
      /**
       * Creates a NodeSelection.
       */
      setNodeSelection: (position: number) => ReturnType,
    }
  }
}

export const setNodeSelection: RawCommands['setNodeSelection'] = position => ({ tr, dispatch }) => {
  if (dispatch) {
    const { doc } = tr
    const from = minMax(position, 0, doc.content.size)
    const selection = NodeSelection.create(doc, from)

    tr.setSelection(selection)
  }

  return true
}
