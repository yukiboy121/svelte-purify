<script>
    import DOMPurify from 'dompurify';

  /**
   * @typedef {Object} Props
   * @property {string} html
   * @property {Parameters<typeof DOMPurify.sanitize>[1]} [options]
   */


  /** @type {Props} */
  let { html, options = undefined } = $props()

  let sanitized = $derived(DOMPurify.sanitize(html, options))
</script>

{@html sanitized}