import {
  Mark,
  markInputRule,
  markPasteRule,
  mergeAttributes,
} from '@tiptap-es5/core'

export interface ItalicOptions {
  HTMLAttributes: Record<string, any>,
}

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    italic: {
      /**
       * Set an italic mark
       */
      setItalic: () => ReturnType,
      /**
       * Toggle an italic mark
       */
      toggleItalic: () => ReturnType,
      /**
       * Unset an italic mark
       */
      unsetItalic: () => ReturnType,
    }
  }
}

export const starInputRegex = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/gm
export const starPasteRegex = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/gm
export const underscoreInputRegex = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/gm
export const underscorePasteRegex = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/gm

export const Italic = Mark.create<ItalicOptions>({
  name: 'italic',

  defaultOptions: {
    HTMLAttributes: {},
  },

  parseHTML() {
    return [
      {
        tag: 'em',
      },
      {
        tag: 'i',
        getAttrs: node => (node as HTMLElement).style.fontStyle !== 'normal' && null,
      },
      {
        style: 'font-style=italic',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['em', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

  addCommands() {
    return {
      setItalic: () => ({ commands }) => {
        return commands.setMark('italic')
      },
      toggleItalic: () => ({ commands }) => {
        return commands.toggleMark('italic')
      },
      unsetItalic: () => ({ commands }) => {
        return commands.unsetMark('italic')
      },
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-i': () => this.editor.commands.toggleItalic(),
    }
  },

  addInputRules() {
    return [
      markInputRule(starInputRegex, this.type),
      markInputRule(underscoreInputRegex, this.type),
    ]
  },

  addPasteRules() {
    return [
      markPasteRule(starPasteRegex, this.type),
      markPasteRule(underscorePasteRegex, this.type),
    ]
  },
})
