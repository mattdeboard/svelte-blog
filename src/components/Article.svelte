<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  export let date: string, source: string, tags: string | undefined;
</script>

<div>
  <!-- <h1 class="title">{title}</h1> -->
  <p class="date">written on {date}</p>
  <div class="content">
    <!-- svelte-ignore missing-declaration -->
    <SvelteMarkdown {source} />
    {#if tags?.length}
      <div>Tagged with: {tags}</div>
    {/if}
  </div>
</div>
