# Bubble Menu

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-bubble-menu.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-bubble-menu)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-bubble-menu.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-bubble-menu?minimal=true)

This extension will make a contextual menu appear near a selection of text. Use it to let users apply [marks](/api/marks) to their text selection.

As always, the markup and styling is totally up to you.

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-bubble-menu
# with Yarn
yarn add @tiptap-es5/extension-bubble-menu
```

## Settings

| Option       | Type          | Default | Description                                                             |
| ------------ | ------------- | ------- | ----------------------------------------------------------------------- |
| element      | `HTMLElement` | `null`  | The DOM element that contains your menu.                                |
| tippyOptions | `Object`      | `{}`    | [Options for tippy.js](https://atomiks.github.io/tippyjs/v6/all-props/) |

## Source code

[packages/extension-bubble-menu/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-bubble-menu/)

## Usage

### JavaScript

```js
import { Editor } from "@tiptap-es5/core";
import BubbleMenu from "@tiptap-es5/extension-bubble-menu";

new Editor({
  extensions: [
    BubbleMenu.configure({
      element: document.querySelector(".menu")
    })
  ]
});
```

### Frameworks

<demos :items="{
  Vue: 'Extensions/BubbleMenu/Vue',
  React: 'Extensions/BubbleMenu/React',
}" />
