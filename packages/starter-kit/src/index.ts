import Dropcursor, { DropcursorOptions } from '@tiptap-es5/extension-dropcursor'
import Gapcursor from '@tiptap-es5/extension-gapcursor'
import Document from '@tiptap-es5/extension-document'
import Paragraph, { ParagraphOptions } from '@tiptap-es5/extension-paragraph'
import Text from '@tiptap-es5/extension-text'
import History, { HistoryOptions } from '@tiptap-es5/extension-history'
import Bold, { BoldOptions } from '@tiptap-es5/extension-bold'
import Italic, { ItalicOptions } from '@tiptap-es5/extension-italic'
import Code, { CodeOptions } from '@tiptap-es5/extension-code'
import CodeBlock, { CodeBlockOptions } from '@tiptap-es5/extension-code-block'
import Heading, { HeadingOptions } from '@tiptap-es5/extension-heading'
import HardBreak, { HardBreakOptions } from '@tiptap-es5/extension-hard-break'
import Strike, { StrikeOptions } from '@tiptap-es5/extension-strike'
import Blockquote, { BlockquoteOptions } from '@tiptap-es5/extension-blockquote'
import HorizontalRule, { HorizontalRuleOptions } from '@tiptap-es5/extension-horizontal-rule'
import BulletList, { BulletListOptions } from '@tiptap-es5/extension-bullet-list'
import OrderedList, { OrderedListOptions } from '@tiptap-es5/extension-ordered-list'
import ListItem, { ListItemOptions } from '@tiptap-es5/extension-list-item'

import { StarterKit } from './starter-kit'

export default StarterKit

export function defaultExtensions(options?: Partial<{
  dropcursor: Partial<DropcursorOptions>,
  paragraph: Partial<ParagraphOptions>,
  history: Partial<HistoryOptions>,
  bold: Partial<BoldOptions>,
  italic: Partial<ItalicOptions>,
  code: Partial<CodeOptions>,
  codeBlock: Partial<CodeBlockOptions>,
  heading: Partial<HeadingOptions>,
  hardBreak: Partial<HardBreakOptions>,
  strike: Partial<StrikeOptions>,
  blockquote: Partial<BlockquoteOptions>,
  horizontalRule: Partial<HorizontalRuleOptions>,
  bulletList: Partial<BulletListOptions>,
  orderedList: Partial<OrderedListOptions>,
  listItem: Partial<ListItemOptions>,
}>) {
  console.warn('[tiptap warn]: defaultExtensions() is deprecated. please use the default export "StarterKit". "StarterKit" is a regular extension that contains all other extensions.')

  return [
    Document,
    Paragraph.configure(options?.paragraph),
    Text,
    Bold.configure(options?.bold),
    Italic.configure(options?.italic),
    Code.configure(options?.code),
    Strike.configure(options?.strike),
    HardBreak.configure(options?.hardBreak),
    Heading.configure(options?.heading),
    Blockquote.configure(options?.blockquote),
    BulletList.configure(options?.bulletList),
    OrderedList.configure(options?.orderedList),
    ListItem.configure(options?.listItem),
    HorizontalRule.configure(options?.horizontalRule),
    CodeBlock.configure(options?.codeBlock),
    History.configure(options?.history),
    Dropcursor.configure(options?.dropcursor),
    Gapcursor,
  ]
}
