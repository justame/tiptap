# Focus

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-focus.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-focus)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-focus.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-focus?minimal=true)

The Focus extension adds a CSS class to focused nodes. By default it adds `.has-focus`, but you can change that.

Note that it’s only a class, the styling is totally up to you. The usage example below has some CSS for that class.

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-focus

# with Yarn
yarn add @tiptap-es5/extension-focus
```

## Settings

| Option    | Type     | Default       | Description                                                             |
| --------- | -------- | ------------- | ----------------------------------------------------------------------- |
| className | `String` | `'has-focus'` | The class that is applied to the focused element.                       |
| mode      | `String` | `'all'`       | Apply the class to `'all'`, the `'shallowest'` or the `'deepest'` node. |

## Source code

[packages/extension-focus/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-focus/)

## Usage

<demo name="Extensions/Focus" highlight="12,34-37" />
