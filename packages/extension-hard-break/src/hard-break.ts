import { Node, mergeAttributes } from '@tiptap-es5/core'

export interface HardBreakOptions {
  HTMLAttributes: Record<string, any>,
}

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    hardBreak: {
      /**
       * Add a hard break
       */
      setHardBreak: () => ReturnType,
    }
  }
}

export const HardBreak = Node.create<HardBreakOptions>({
  name: 'hardBreak',

  defaultOptions: {
    HTMLAttributes: {},
  },

  inline: true,

  group: 'inline',

  selectable: false,

  parseHTML() {
    return [
      { tag: 'br' },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['br', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
  },

  addCommands() {
    return {
      setHardBreak: () => ({ commands }) => {
        return commands.first([
          () => commands.exitCode(),
          () => commands.insertContent({ type: this.name }),
        ])
      },
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Enter': () => this.editor.commands.setHardBreak(),
      'Shift-Enter': () => this.editor.commands.setHardBreak(),
    }
  },
})
