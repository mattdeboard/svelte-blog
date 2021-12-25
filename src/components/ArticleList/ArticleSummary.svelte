<script lang="ts">
  export let date: string, summary: string, title: string;
</script>

<div class="entry-overview">
  <div class="date">{date}</div>
  <div class="detail">
    <a href={`/${date}`}>{title}</a>

    <div class="summary"><p>{summary}</p></div>
  </div>
</div>
<hr />
