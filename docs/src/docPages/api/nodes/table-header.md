# TableHeader

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-table-header.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-table-header)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-table-header.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-table-header?minimal=true)

Table headers are optional. But come on, you want them, don’t you? If you don’t want them, update the `content` attribute of the [`TableRow`](/api/nodes/table-row) extension, like this:

```js
// Table rows without table headers
TableRow.extend({
  content: "tableCell*"
});
```

This is the default, which allows table headers:

```js
// Table rows with table headers (default)
TableRow.extend({
  content: "(tableCell | tableHeader)*"
});
```

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-table @tiptap-es5/extension-table-row @tiptap-es5/extension-table-header @tiptap-es5/extension-table-cell

# with Yarn
yarn add @tiptap-es5/extension-table @tiptap-es5/extension-table-row @tiptap-es5/extension-table-header @tiptap-es5/extension-table-cell
```

This extension requires the [`Table`](/api/nodes/table), [`TableRow`](/api/nodes/table-row) and [`TableCell`](/api/nodes/table-cell) nodes.

## Source code

[packages/extension-table-header/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-table-header/)

## Usage

<demo name="Nodes/Table" />
