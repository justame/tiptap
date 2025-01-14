import {
  Node,
  nodeInputRule,
  mergeAttributes,
} from '@tiptap-es5/core'
import { TextSelection } from 'prosemirror-state'

export interface HorizontalRuleOptions {
  HTMLAttributes: Record<string, any>,
}

declare module '@tiptap-es5/core' {
  interface Commands<ReturnType> {
    horizontalRule: {
      /**
       * Add a horizontal rule
       */
      setHorizontalRule: () => ReturnType,
    }
  }
}

export const HorizontalRule = Node.create<HorizontalRuleOptions>({
  name: 'horizontalRule',

  defaultOptions: {
    HTMLAttributes: {},
  },

  group: 'block',

  parseHTML() {
    return [
      { tag: 'hr' },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['hr', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
  },

  addCommands() {
    return {
      setHorizontalRule: () => ({ chain }) => {
        return chain()
          .insertContent({ type: this.name })
          .command(({ tr, dispatch }) => {
            if (dispatch) {
              const { parent, pos } = tr.selection.$from
              const posAfter = pos + 1
              const nodeAfter = tr.doc.nodeAt(posAfter)

              // end of document
              if (!nodeAfter) {
                const node = parent.type.contentMatch.defaultType?.create()

                if (node) {
                  tr.insert(posAfter, node)
                  tr.setSelection(TextSelection.create(tr.doc, posAfter))
                }
              }

              tr.scrollIntoView()
            }

            return true
          })
          .run()
      },
    }
  },

  addInputRules() {
    return [
      nodeInputRule(/^(?:---|—-|___\s|\*\*\*\s)$/, this.type),
    ]
  },
})
