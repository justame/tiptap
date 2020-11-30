import { EditorState } from 'prosemirror-state'
import { MarkType } from 'prosemirror-model'
import getMarkAttributes from './getMarkAttributes'
import isEmptyObject from '../utilities/isEmptyObject'
import objectIncludes from '../utilities/objectIncludes'

export default function markHasAttributes(state: EditorState, type: MarkType, attributes: {}) {
  if (isEmptyObject(attributes)) {
    return true
  }

  const originalAttributes = getMarkAttributes(state, type)

  return objectIncludes(originalAttributes, attributes)
}