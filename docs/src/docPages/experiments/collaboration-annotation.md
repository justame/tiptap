# CollaborationAnnotation

<!-- [![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-collaboration-annotation.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-collaboration-annotation)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-collaboration-annotation.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-collaboration-annotation?minimal=true) -->

⚠️ Experiment

:::warning Don’t use this in production
This extension still has major issues (for example https://github.com/yjs/y-prosemirror/issues/44). We’re looking for funding to finish the extension. If you think you can help with that, reach out to humans@tiptap-es5.dev!
:::

Annotations can be used to add additional information to the content, for example comments. They live on a different level than the actual editor content.

<!-- :::pro Pro Extension
We kindly ask you to [sponsor our work](/sponsor) when using this extension in production.
::: -->

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-collaboration-annotation

# with Yarn
yarn add @tiptap-es5/extension-collaboration-annotation
```

This extension requires the [`Collaboration`](/api/extensions/collaboration) extension.

## Settings

| Option   | Type     | Default     | Description                                                                        |
| -------- | -------- | ----------- | ---------------------------------------------------------------------------------- |
| document | `Object` | `null`      | An initialized Y.js document.                                                      |
| field    | `String` | `'default'` | Name of a Y.js map, can be changed to sync multiple fields with one Y.js document. |
| map      | `Object` | `null`      | A raw Y.js map, can be used instead of `document` and `field`.                     |

## Commands

| Command          | Parameters | Description                                                               |
| ---------------- | ---------- | ------------------------------------------------------------------------- |
| addAnnotation    | data       | Adds an annotation to the current selection, takes a string or an object. |
| updateAnnotation | id, data   | Update the data that’s associated with an annotation.                     |
| deleteAnnotation | id         | Remove an annotation.                                                     |

<!-- ## Source code
[packages/extension-collaboration-annotation/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-collaboration-annotation/) -->

## Usage

<demo name="Experiments/CollaborationAnnotation" />
