<template>
  <div>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap-es5/vue-2'
import Document from '@tiptap-es5/extension-document'
import Paragraph from '@tiptap-es5/extension-paragraph'
import Text from '@tiptap-es5/extension-text'
import Focus from '@tiptap-es5/extension-focus'
import Code from '@tiptap-es5/extension-code'
import BulletList from '@tiptap-es5/extension-bullet-list'
import ListItem from '@tiptap-es5/extension-list-item'

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
        Focus.configure({
          className: 'has-focus',
          mode: 'all',
        }),
        Code,
        BulletList,
        ListItem,
      ],
      autofocus: true,
      content: `
        <p>
          The focus extension adds a class to the focused node only. That enables you to add a custom styling to just that node. By default, it’ll add <code>.has-focus</code>, even to nested nodes.
        </p>
        <ul>
          <li>Nested elements (like this list item) will be focused with the default setting of <code>mode: all</code>.</li>
          <li>Otherwise the whole list will get the focus class, even when just a single list item is selected.</li>
        </ul>
      `,
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
.has-focus {
  border-radius: 3px;
  box-shadow: 0 0 0 3px #68CEF8;
}

/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }
}
</style>
