<script lang="ts">
  export let link;
  export let summary;
  export let date;
</script>

<div class="entry-overview">
  <div class="detail">
    <h1><a href={link}>{link}</a></h1>
    {#if summary}
      <div class="summary">{summary}</div>
    {/if}
    <div class="date">{date}</div>
  </div>
</div>
