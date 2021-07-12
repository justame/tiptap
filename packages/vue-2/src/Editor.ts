import { Editor as CoreEditor } from '@tiptap-es5/core'
import Vue from 'vue'

export class Editor extends CoreEditor {
  public contentComponent: Vue | null = null
}
