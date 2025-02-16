<template>
  <div v-if="editor">
    <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
      link
    </button>
    <button @click="editor.chain().focus().unsetLink().run()" v-if="editor.isActive('link')">
      remove
    </button>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap-es5/vue-2'
import Document from '@tiptap-es5/extension-document'
import Paragraph from '@tiptap-es5/extension-paragraph'
import Text from '@tiptap-es5/extension-text'
import Link from '@tiptap-es5/extension-link'
import Bold from '@tiptap-es5/extension-bold'

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
        Bold,
        Link,
      ],
      content: `
        <p>
          Wow, this editor has support for links to the whole <strong><a href="https://en.wikipedia.org/wiki/World_Wide_Web">world wide web</a></strong>. We tested a lot of URLs and I think you can add *every URL* you want. Isn’t that cool? Let’s try <a href="https://statamic.com/">another one!</a> Yep, seems to work.
        </p>
        <p>
          By default every link will get a \`rel="noopener noreferrer nofollow"\` attribute. It’s configurable though.
        </p>
      `,
    })
  },

  methods: {
    setLink() {
      const url = window.prompt('URL')

      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    },
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss" scoped>
/* Basic editor styles */
::v-deep {
  .ProseMirror {
    > * + * {
      margin-top: 0.75em;
    }

    a {
      color: #68CEF8;
    }
  }
}
</style>
