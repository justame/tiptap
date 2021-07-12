# BulletList

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-bullet-list.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-bullet-list)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-bullet-list.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-bullet-list?minimal=true)

This extension enables you to use bullet lists in the editor. They are rendered as `<ul>` HTML tags.

Type <code>\*&nbsp;</code>, <code>-&nbsp;</code> or <code>+&nbsp;</code> at the beginning of a new line and it will magically transform to a bullet list.

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-bullet-list @tiptap-es5/extension-list-item

# with Yarn
yarn add @tiptap-es5/extension-bullet-list @tiptap-es5/extension-list-item
```

This extension requires the [`ListItem`](/api/nodes/list-item) node.

## Settings

| Option         | Type     | Default | Description                                                           |
| -------------- | -------- | ------- | --------------------------------------------------------------------- |
| HTMLAttributes | `Object` | `{}`    | Custom HTML attributes that should be added to the rendered HTML tag. |

## Commands

| Command    | Parameters | Description           |
| ---------- | ---------- | --------------------- |
| bulletList | —          | Toggle a bullet list. |

## Keyboard shortcuts

- Windows/Linux: `Control`&nbsp;`Shift`&nbsp;`8`
- macOS: `Cmd`&nbsp;`Shift`&nbsp;`8`

## Source code

[packages/extension-bullet-list/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-bullet-list/)

## Usage

<demo name="Nodes/BulletList" highlight="3-5,17-18,37-38" />
