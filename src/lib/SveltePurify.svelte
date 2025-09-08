<script lang="ts">
    import { BrowserDOMPurify } from '$lib/helpers/browser.svelte'
    import type { Config } from 'dompurify'
    import { onMount } from 'svelte'

    type Props = {
        html: string
        options?: Config
    }
    let { html, options = undefined }: Props = $props()
    const sanitize = $derived(new BrowserDOMPurify(html, options))
    let mounted = $state(false)
    onMount(() => {
        mounted = true
    })
</script>

{#if mounted}
    <!-- trunk-ignore(eslint/svelte/no-at-html-tags) -->
    {@html sanitize.html}
{/if}
