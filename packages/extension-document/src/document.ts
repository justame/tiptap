import { Node } from '@tiptap-es5/core'

export const Document = Node.create({
  name: 'doc',
  topNode: true,
  content: 'block+',
})
