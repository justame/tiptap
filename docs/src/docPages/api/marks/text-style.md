# TextStyle

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-text-style.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-text-style)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-text-style.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-text-style?minimal=true)

This mark renders a `<span>` HTML tag and enables you to add a list of styling related attributes, for example font-family, font-size, or font-color. The extension doesn’t add any styling attribute by default, but other extensions use it as the foundation, for example [`FontFamily`](/api/extensions/font-family).

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-text-style

# with Yarn
yarn add @tiptap-es5/extension-text-style
```

## Commands

| Command              | Parameters | Description                                   |
| -------------------- | ---------- | --------------------------------------------- |
| removeEmptyTextStyle | –          | Remove `<span>` tags without an inline style. |

## Source code

[packages/extension-text-style/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-text-style/)

## Usage

<demo name="Marks/TextStyle" />
