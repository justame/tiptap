# Text

[![Version](https://img.shields.io/npm/v/@tiptap-es5/extension-text.svg?label=version)](https://www.npmjs.com/package/@tiptap-es5/extension-text)
[![Downloads](https://img.shields.io/npm/dm/@tiptap-es5/extension-text.svg)](https://npmcharts.com/compare/@tiptap-es5/extension-text?minimal=true)

**The `Text` extension is required**, at least if you want to work with text of any kind and that’s very likely. This extension is a little bit different, it doesn’t even render HTML. It’s plain text, that’s all.

:::warning Breaking Change from 1.x → 2.x
tiptap 1 tried to hide that node from you, but it has always been there. You have to explicitly import it from now on (or use `StarterKit`).
:::

## Installation

```bash
# with npm
npm install @tiptap-es5/extension-text

# with Yarn
yarn add @tiptap-es5/extension-text
```

## Source code

[packages/extension-text/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-text/)

## Usage

<demo name="Nodes/Text" highlight="12,30" />
