import { describe, expect, it } from 'vitest'

describe('package entry', () => {
    it('loads module without crashing', async () => {
        const mod = await import('./index')
        expect(mod).toBeTruthy()
        expect(mod).toHaveProperty('SveltePurify')
    })
})
