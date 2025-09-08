// @vitest-environment jsdom
import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/svelte'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Component from './SveltePurify.svelte'

describe('SveltePurify', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('renders sanitized HTML and strips <script> tags', () => {
        const html = '<p>Hello <strong>world</strong><script>alert(1)</script></p>'
        const { container } = render(Component, { html })
        const p = container.querySelector('p')
        expect(p?.outerHTML).toBe('<p>Hello <strong>world</strong></p>')
    })

    it('passes options to DOMPurify.sanitize', () => {
        const html = '<p onclick="do()">x</p>'
        const options = { ALLOWED_TAGS: ['p'], ALLOWED_ATTR: [] }

        const { container } = render(Component, { html, options })
        const p = container.querySelector('p')
        expect(p?.outerHTML).toBe('<p>x</p>')
    })

    it('reacts to prop changes and re-sanitizes', async () => {
        const first = '<div>safe</div>'
        const second = '<div>still safe<script>boom()</script></div>'

        const { container, rerender } = render(Component, { html: first })
        const firstDiv = container.querySelector('div')
        expect(firstDiv?.outerHTML).toBe('<div>safe</div>')

        await rerender({ html: second })
        const secondDiv = container.querySelector('div')
        expect(secondDiv?.outerHTML).toBe('<div>still safe</div>')
    })

    it('removes event handler attributes (e.g., onerror)', () => {
        const html = '<img src="about:blank" onerror="alert(1)" />'
        const { container } = render(Component, { html })
        const img = container.querySelector('img')
        expect(img).toBeTruthy()
        expect(img).not.toHaveAttribute('onerror')
    })

    it('strips javascript: URLs from href/src', () => {
        const html = '<a href="javascript:alert(1)">click</a>'
        const { container } = render(Component, { html })
        const a = container.querySelector('a')
        expect(a).toBeTruthy()
        expect(a).not.toHaveAttribute('href')
        expect(container.innerHTML).toContain('<a>click</a>')
    })

    it('respects FORBID_TAGS option by removing forbidden tags', () => {
        const html = '<p>Hello <strong>world</strong></p>'
        const options = { FORBID_TAGS: ['strong'] }
        const { container } = render(Component, { html, options })
        const p = container.querySelector('p')
        expect(p?.outerHTML).toBe('<p>Hello world</p>')
    })

    it('re-sanitizes when only options change (ADD_TAGS enables iframe)', async () => {
        const html = '<iframe src="about:blank"></iframe>'
        const { container, rerender } = render(Component, { html })
        expect(container.querySelector('iframe')).toBeNull()

        await rerender({ html, options: { ADD_TAGS: ['iframe'] } })
        const iframe = container.querySelector('iframe')
        expect(iframe).toBeTruthy()
    })
})
