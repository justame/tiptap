# TaskItem

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-task-item.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-task-item)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-task-item.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-task-item?minimal=true)

This extension renders a task item list element, which is a `<li>` tag with a `data-type` attribute set to `taskItem`. It also renders a checkbox inside the list element, which updates a `checked` attribute.

This extension doesn’t require any JavaScript framework, it’s based on Vanilla JavaScript.

## Installation

```bash
# With npm
npm install @tiptap-es5/extension-task-list @tiptap-es5/extension-task-item

# Or: With Yarn
yarn add @tiptap-es5/extension-task-list @tiptap-es5/extension-task-item
```

This extension requires the [`TaskList`](/api/nodes/task-list) node.

## Settings

| Option         | Type     | Default | Description                                                           |
| -------------- | -------- | ------- | --------------------------------------------------------------------- |
| HTMLAttributes | `Object` | `{}`    | Custom HTML attributes that should be added to the rendered HTML tag. |

## Keyboard shortcuts

- New list item: `Enter`

## Source code

[packages/extension-task-item/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-task-item/)

## Usage

<demo name="Nodes/TaskItem" />
