<template>
  <div v-if="editor">
    <button @click="editor.chain().focus().toggleSubscript().run()" :class="{ 'is-active': editor.isActive('subscript') }">
      subscript
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap-es5/vue-2'
import Document from '@tiptap-es5/extension-document'
import Paragraph from '@tiptap-es5/extension-paragraph'
import Text from '@tiptap-es5/extension-text'
import Subscript from '@tiptap-es5/extension-subscript'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        Subscript,
      ],
      content: `
        <p>This is regular text.</p>
        <p><sub>This is subscript.</sub></p>
        <p><span style="vertical-align: sub">And this.</span></p>
      `,
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
