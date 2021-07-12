import { onMounted, onBeforeUnmount, ref } from 'vue'
import { EditorOptions } from '@tiptap-es5/core'
import { Editor } from './Editor'

export const useEditor = (options: Partial<EditorOptions> = {}) => {
  const editor = ref<Editor>()

  onMounted(() => {
    editor.value = new Editor(options)
  })

  onBeforeUnmount(() => {
    editor.value?.destroy()
  })

  return editor
}
