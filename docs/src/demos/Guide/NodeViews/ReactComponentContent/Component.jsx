import React from 'react'
import { NodeViewWrapper, NodeViewContent } from '@tiptap-es5/react'

export default () => {
  return (
    <NodeViewWrapper className="react-component-with-content">
      <span className="label" contentEditable={false}>React Component</span>

      <NodeViewContent className="content" />
    </NodeViewWrapper>
  )
}
