import { describe, it, expect } from 'vitest'
import { run } from '../src/index.js'

describe('cli entry', () => {
  it('returns a startup message', async () => {
    const result = await run()
    expect(result).toContain('running')
  })
})
