<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import CodeRenderer from "$components/CodeRenderer.svelte";
  let date = "::date::";
  let source = "::source::";
</script>

<div>
  <!-- <h1 class="title">{title}</h1> -->
  <p class="date">written on {date}</p>
  <div class="content">
    <!-- svelte-ignore missing-declaration -->
    <SvelteMarkdown {source} renderers={{ code: CodeRenderer }} />
  </div>
</div>
