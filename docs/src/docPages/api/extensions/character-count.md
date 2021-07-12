# CharacterCount

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-character-count.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-character-count)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-character-count.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-character-count?minimal=true)

The `CharacterCount` extension limits the number of allowed character to a specific length. That’s it, that’s all.

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-character-count

# with Yarn
yarn add @tiptap-es5/extension-character-count
```

## Settings

| Option | Type     | Default | Description                                              |
| ------ | -------- | ------- | -------------------------------------------------------- |
| limit  | `Number` | `0`     | The maximum number of characters that should be allowed. |

## Source code

[packages/extension-character-count/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-character-count/)

## Usage

<demo name="Extensions/CharacterCount" />

## Count words, emojis, letters …

Want to count words instead? Or emojis? Or the letter _a_? Sure, no problem. You can access the `textContent` directly and count whatever you’re into.

```js
new Editor({
  onUpdate({ editor }) {
    const wordCount = editor.state.doc.textContent.split(" ").length;

    console.log(wordCount);
  }
});
```
