import { describe, it, expect } from 'vitest'
import { LIB_NAME } from '../src/index.js'

describe('lib', () => {
  it('exports a library identifier', () => {
    expect(LIB_NAME).toBe('{{projectName}}')
  })
})
