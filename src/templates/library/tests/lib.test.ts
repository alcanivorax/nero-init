import { describe, it, expect } from 'vitest'
import { LIB_NAME } from '../src/lib'

describe('lib', () => {
  it('exports a library identifier', () => {
    expect(LIB_NAME).toBe('library')
  })
})
