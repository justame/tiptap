# FontFamily

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-font-family.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-font-family)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-font-family.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-font-family?minimal=true)

This extension enables you to set the font family in the editor. It uses the [`TextStyle`](/api/marks/text-style) mark, which renders a `<span>` tag. The font family is applied as inline style, for example `<span style="font-family: Arial">`.

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-text-style @tiptap-es5/extension-font-family

# with Yarn
yarn add @tiptap-es5/extension-text-style @tiptap-es5/extension-font-family
```

This extension requires the [`TextStyle`](/api/marks/text-style) mark.

## Settings

| Option | Type    | Default         | Description                                                              |
| ------ | ------- | --------------- | ------------------------------------------------------------------------ |
| types  | `Array` | `['textStyle']` | A list of marks to which the font family attribute should be applied to. |

## Commands

| Command    | Parameters | Description                                   |
| ---------- | ---------- | --------------------------------------------- |
| fontFamily | fontFamily | Applies the given font family as inline style |

## Source code

[packages/extension-font-family/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-font-family/)

## Usage

<demo name="Extensions/FontFamily" />
