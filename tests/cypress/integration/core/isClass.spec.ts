/// <reference types="cypress" />

import isClass from '@tiptap-es5/core/src/utilities/isClass'

describe('isClass', () => {
  it('returns true for classes', () => {
    const instance = new (class {
      public foo = 'bar'
    })()

    expect(isClass(instance)).to.eq(true)
  })

  it('return false for objects', () => {
    const instance = {}

    expect(isClass(instance)).to.eq(false)
  })
})
