import React from 'react'
import { Editor as CoreEditor } from '@tiptap-es5/core'
import { EditorContentProps, EditorContentState } from './EditorContent'

export class Editor extends CoreEditor {
  public contentComponent: React.Component<EditorContentProps, EditorContentState> | null = null
}
