<template>
  <div>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap-es5/vue-2'
import Document from '@tiptap-es5/extension-document'
import Text from '@tiptap-es5/extension-text'
import Paragraph from '@tiptap-es5/extension-paragraph'
import Heading from '@tiptap-es5/extension-heading'
import Linter, { BadWords, Punctuation, HeadingLevel } from './extension'

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
        Heading,
        Text,
        Linter.configure({
          plugins: [
            BadWords,
            Punctuation,
            HeadingLevel,
          ],
        }),
      ],
      content: `
        <h1>
          Lint example
        </h1>
        <p>
          This is a sentence ,but the comma clearly isn't in the right place.
        </p>
        <h3>
          Too-minor header
        </h3>
        <p>
          You can hover over the icons on the right to see what the problem is, click them to select the relevant text, and, obviously, double-click them to automatically fix it (if supported).
        </ul>
      `,
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .problem {
    background: #fdd;
    border-bottom: 1px solid #f22;
    margin-bottom: -1px;
  }

  .lint-icon {
    display: inline-block;
    position: absolute;
    right: 2px;
    cursor: pointer;
    border-radius: 100px;
    background: #f22;
    color: white;
    font-family: times, georgia, serif;
    font-size: 15px;
    font-weight: bold;
    width: 1.1em;
    height: 1.1em;
    text-align: center;
    padding-left: .5px;
    line-height: 1.1em
  }

  .lint-icon:before {
    content: "!";
  }

  .ProseMirror {
    padding-right: 20px;
  }
}
</style>
