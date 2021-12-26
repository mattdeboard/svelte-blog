<script>
  import hljs from "highlight.js";

  export let lang;
  export let text;
</script>

<pre
  class={lang}><code>{@html hljs.highlight(text, {language: lang || "text"}).value}</code></pre>
