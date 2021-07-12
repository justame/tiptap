# Superscript

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-superscript.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-superscript)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-superscript.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-superscript?minimal=true)

Use this extension to render text in <sup>superscript</sup>. If you pass `<sup>` or text with `vertical-align: super` as inline style in the editor’s initial content, both will be normalized to a `<sup>` HTML tag.

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-superscript

# with Yarn
yarn add @tiptap-es5/extension-superscript
```

## Settings

| Option         | Type     | Default | Description                                                           |
| -------------- | -------- | ------- | --------------------------------------------------------------------- |
| HTMLAttributes | `Object` | `{}`    | Custom HTML attributes that should be added to the rendered HTML tag. |

## Commands

| Command           | Parameters | Description               |
| ----------------- | ---------- | ------------------------- |
| setSuperscript    | —          | Mark text as superscript. |
| toggleSuperscript | —          | Toggle superscript mark.  |
| unsetSuperscript  | —          | Remove superscript mark.  |

## Keyboard shortcuts

- Windows/Linux: `Control`&nbsp;`.`
- macOS: `Cmd`&nbsp;`.`

## Source code

[packages/extension-superscript/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-superscript/)

## Usage

<demo name="Marks/Superscript" highlight="3-5,17,36" />
