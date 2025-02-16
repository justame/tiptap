import { Extension } from '@tiptap-es5/core'
import { dropCursor } from 'prosemirror-dropcursor'

export interface DropcursorOptions {
  color: string | null,
  width: number | null,
  class: string | null,
}

export const Dropcursor = Extension.create<DropcursorOptions>({
  name: 'dropCursor',

  defaultOptions: {
    color: 'currentColor',
    width: 1,
    class: null,
  },

  addProseMirrorPlugins() {
    return [
      dropCursor(this.options),
    ]
  },
})
