import { describe, it, expect } from 'vitest'

describe('cli module', () => {
  it('can be imported without throwing', async () => {
    const mod = await import('../src/cli/options.js')
    expect(mod).toBeDefined()
  })
})
