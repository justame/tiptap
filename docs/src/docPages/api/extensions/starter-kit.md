# StarterKit

[![Version](https://img.shields.io/npm/v/@tiptap-es5/starter-kit.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/starter-kit)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/starter-kit.svg)](https://npmcharts.com/compare/@tiptap-es5/starter-kit?minimal=true)

The `StarterKit` is a collection of the most popular tiptap extensions. If you’re just getting started, this extension is for you.

## Installation

```bash
# with npm
npm install @tiptap-es5/starter-kit

# with Yarn
yarn add @tiptap-es5/starter-kit
```

## Included extensions

### Nodes

- [`Blockquote`](/api/nodes/blockquote)
- [`BulletList`](/api/nodes/bullet-list)
- [`CodeBlock`](/api/nodes/code-block)
- [`Document`](/api/nodes/document)
- [`HardBreak`](/api/nodes/hard-break)
- [`Heading`](/api/nodes/heading)
- [`HorizontalRule`](/api/nodes/horizontal-rule)
- [`ListItem`](/api/nodes/list-item)
- [`Mention`](/api/nodes/mention)
- [`OrderedList`](/api/nodes/ordered-list)
- [`Paragraph`](/api/nodes/paragraph)
- [`Text`](/api/nodes/text)

### Marks

- [`Bold`](/api/marks/bold)
- [`Code`](/api/marks/code)
- [`Italic`](/api/marks/italic)
- [`Strike`](/api/marks/strike)
- [`TextStyle`](/api/marks/text-style)

### Extensions

- [`Dropcursor`](/api/extensions/dropcursor)
- [`Gapcursor`](/api/extensions/gapcursor)
- [`History`](/api/extensions/history)

## Source code

[packages/starter-kit/](https://github.com/ueberdosis/tiptap/blob/main/packages/starter-kit/)

## Usage

Pass `StarterKit` to the editor to load all included extension at once.

```js
import { Editor } from "@tiptap-es5/core";
import StarterKit from "@tiptap-es5/starter-kit";

const editor = new Editor({
  content: "<p>Example Text</p>",
  extensions: [StarterKit]
});
```

You can configure the included extensions, or even disable a few of them, like shown below.

```js
import { Editor } from "@tiptap-es5/core";
import StarterKit from "@tiptap-es5/starter-kit";

const editor = new Editor({
  content: "<p>Example Text</p>",
  extensions: [
    StarterKit.configure({
      // Disable an included extension
      history: false,

      // Configure an included extension
      heading: {
        levels: [1, 2]
      }
    })
  ]
});
```
