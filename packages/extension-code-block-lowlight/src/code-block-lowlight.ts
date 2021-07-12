import lowlight from 'lowlight/lib/core'
import CodeBlock, { CodeBlockOptions } from '@tiptap-es5/extension-code-block'
import { LowlightPlugin } from './lowlight-plugin'

export interface CodeBlockLowlightOptions extends CodeBlockOptions {
  lowlight: any,
}

export const CodeBlockLowlight = CodeBlock.extend<CodeBlockLowlightOptions>({
  defaultOptions: {
    ...CodeBlock.options,
    lowlight,
  },

  addProseMirrorPlugins() {
    return [
      ...this.parent?.() || [],
      LowlightPlugin({
        name: 'codeBlock',
        lowlight: this.options.lowlight,
      }),
    ]
  },
})
