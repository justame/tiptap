/// <reference types="cypress" />

import { Editor } from '@tiptap-es5/core'
import Document from '@tiptap-es5/extension-document'
import Paragraph from '@tiptap-es5/extension-paragraph'
import Text from '@tiptap-es5/extension-text'
import History from '@tiptap-es5/extension-history'

describe('can', () => {
  it('not undo', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        History,
      ],
    })

    const canUndo = editor.can().undo()

    expect(canUndo).to.eq(false)
  })

  it('undo', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        History,
      ],
    })

    editor.commands.setContent('foo')

    const canUndo = editor.can().undo()

    expect(canUndo).to.eq(true)
  })

  it('not chain undo', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        History,
      ],
    })

    const canUndo = editor.can().chain().undo().run()

    expect(canUndo).to.eq(false)
  })

  it('chain undo', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        History,
      ],
    })

    editor.commands.setContent('foo')

    const canUndo = editor.can().chain().undo().run()

    expect(canUndo).to.eq(true)
  })
})
