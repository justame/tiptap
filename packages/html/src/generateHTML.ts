import { Extensions, getSchema, JSONContent } from '@tiptap-es5/core'
import { Node } from 'prosemirror-model'
import getHTMLFromFragment from './getHTMLFromFragment'

export default function generateHTML(doc: JSONContent, extensions: Extensions): string {
  const schema = getSchema(extensions)
  const contentNode = Node.fromJSON(schema, doc)

  return getHTMLFromFragment(contentNode, schema)
}
