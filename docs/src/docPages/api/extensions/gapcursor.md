# Gapcursor

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-gapcursor.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-gapcursor)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-gapcursor.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-gapcursor?minimal=true)

This extension loads the [ProseMirror Gapcursor plugin](https://github.com/ProseMirror/prosemirror-gapcursor) by Marijn Haverbeke, which adds a gap for the cursor in places that don’t allow regular selection. For example, after a table at the end of a document.

Note that tiptap is headless, but the gapcursor needs CSS for its appearance. The [default CSS](https://github.com/ueberdosis/tiptap/tree/main/packages/core/src/style.ts) is loaded through the Editor class.

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-gapcursor

# with Yarn
yarn add @tiptap-es5/extension-gapcursor
```

## Source code

[packages/extension-gapcursor/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-gapcursor/)

## Usage

<demo name="Extensions/Gapcursor" highlight="12,33" />
