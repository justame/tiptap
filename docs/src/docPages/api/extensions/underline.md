# Underline
Allows you to use the `<u>` HTML tag in the editor.

#### Options
*None*

#### Commands
| command | options | description |
| ------ | ---- | ---------------- |
| underline | none | Mark text as underlined. |

#### Keybindings
* Windows & Linux: `Control` + `U`
* macOS: `Command` + `U`

#### Example

```markup
<template>
  <div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <button type="button" :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
        Underline
      </button>
    </editor-menu-bar>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { Underline } from 'tiptap-extensions'

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Underline(),
        ],
        content: `
          <p><u>This is underlined.</u></p>
          <p style="text-decoration: underline">This as well.</p>
        `,
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>
```