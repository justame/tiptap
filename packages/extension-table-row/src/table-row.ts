import { Node, mergeAttributes } from '@tiptap-es5/core'

export interface TableRowOptions {
  HTMLAttributes: Record<string, any>,
}

export const TableRow = Node.create<TableRowOptions>({
  name: 'tableRow',

  defaultOptions: {
    HTMLAttributes: {},
  },

  content: '(tableCell | tableHeader)*',

  tableRole: 'row',

  parseHTML() {
    return [
      { tag: 'tr' },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['tr', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },
})
