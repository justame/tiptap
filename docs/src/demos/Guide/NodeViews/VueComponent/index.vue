<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap-es5/vue-2'
import StarterKit from '@tiptap-es5/starter-kit'
import VueComponent from './Extension.js'

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
        StarterKit,
        VueComponent,
      ],
      content: `
        <p>
          This is still the text editor you’re used to, but enriched with node views.
        </p>
        <vue-component count="0"></vue-component>
        <p>
          Did you see that? That’s a Vue component. We are really living in the future.
        </p>
      `,
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }
}
</style>
