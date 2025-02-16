# OrderedList

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-ordered-list.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-ordered-list)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-ordered-list.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-ordered-list?minimal=true)

This extension enables you to use ordered lists in the editor. They are rendered as `<ol>` HTML tags.

Type <code>1.&nbsp;</code> (or any other number followed by a dot) at the beginning of a new line and it will magically transform to a ordered list.

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-ordered-list @tiptap-es5/extension-list-item

# with Yarn
yarn add @tiptap-es5/extension-ordered-list @tiptap-es5/extension-list-item
```

This extension requires the [`ListItem`](/api/nodes/list-item) node.

## Settings

| Option         | Type     | Default | Description                                                           |
| -------------- | -------- | ------- | --------------------------------------------------------------------- |
| HTMLAttributes | `Object` | `{}`    | Custom HTML attributes that should be added to the rendered HTML tag. |

## Commands

| Command     | Parameters | Description             |
| ----------- | ---------- | ----------------------- |
| orderedList | —          | Toggle an ordered list. |

## Keyboard shortcuts

- Windows/Linux: `Control`&nbsp;`Shift`&nbsp;`7`
- macOS: `Cmd`&nbsp;`Shift`&nbsp;`7`

## Source code

[packages/extension-ordered-list/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-ordered-list/)

## Usage

<demo name="Nodes/OrderedList" highlight="3-5,17-18,37-38" />
