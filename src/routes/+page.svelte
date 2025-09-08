<script lang="ts">
    import { SveltePurify } from '$lib/index.js'

    const html = `<h1> Welcome to My HTML Playground! 🎨 </h1>

Hey there! This is a <i>fun</i> example of mixing <em>HTML</em> .

You can even use <sup>superscript</sup> and <sub>subscript</sub> text!

<div style="background-color: red;">
Where did the iframe below go?!

<iframe src="about:blank" style="height: 100px; width: 100px;"></iframe>
</div>

<details>
<summary>Want to see something cool?</summary>
Here's a hidden surprise! 🎉
</details>

Happy coding! <span style="color: hotpink">♥</span>`
</script>

<SveltePurify {html} />
