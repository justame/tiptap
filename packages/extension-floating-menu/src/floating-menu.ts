import { Extension } from '@tiptap-es5/core'
import { FloatingMenuPlugin, FloatingMenuPluginProps } from './floating-menu-plugin'

export type FloatingMenuOptions = Omit<FloatingMenuPluginProps, 'editor' | 'element'> & {
  element: HTMLElement | null,
}

export const FloatingMenu = Extension.create<FloatingMenuOptions>({
  name: 'floatingMenu',

  defaultOptions: {
    element: null,
    tippyOptions: {},
  },

  addProseMirrorPlugins() {
    if (!this.options.element) {
      return []
    }

    return [
      FloatingMenuPlugin({
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
      }),
    ]
  },
})
