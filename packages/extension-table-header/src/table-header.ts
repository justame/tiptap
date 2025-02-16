import { Node, mergeAttributes } from '@tiptap-es5/core'

export interface TableHeaderOptions {
  HTMLAttributes: Record<string, any>,
}
export const TableHeader = Node.create<TableHeaderOptions>({
  name: 'tableHeader',

  defaultOptions: {
    HTMLAttributes: {},
  },

  content: 'block+',

  addAttributes() {
    return {
      colspan: {
        default: 1,
      },
      rowspan: {
        default: 1,
      },
      colwidth: {
        default: null,
        parseHTML: element => {
          const colwidth = element.getAttribute('colwidth')
          const value = colwidth
            ? [parseInt(colwidth, 10)]
            : null

          return {
            colwidth: value,
          }
        },
      },
    }
  },

  tableRole: 'header_cell',

  isolating: true,

  parseHTML() {
    return [
      { tag: 'th' },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['th', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

})
