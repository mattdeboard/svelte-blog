<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  let date = "::date::";
  let source = "::source::";
</script>

<div>
  <p class="date">written on {date}</p>
  <div class="content">
    <SvelteMarkdown {source} />
  </div>
</div>
