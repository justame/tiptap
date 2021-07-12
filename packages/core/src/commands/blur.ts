import { RawCommands } from '../types'

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    blur: {
      /**
       * Removes focus from the editor.
       */
      blur: () => ReturnType,
    }
  }
}

export const blur: RawCommands['blur'] = () => ({ view }) => {
  const element = view.dom as HTMLElement

  element.blur()

  return true
}
