<script lang="ts">
  import { indexStore } from "../../stores";
  import { KeyPath } from "../../stores";
  import { onDestroy } from "svelte";
  // import { format } from "date-fns";
  import ArticleOverview from "./ArticleOverview.svelte";

  let listState;
  const unsubscribe = indexStore.subscribe(state => {
    listState = state;
  });
  onDestroy(unsubscribe);
  export let appState;
  // console.log(appState);
</script>

<!-- svelte-ignore -->
{#await appState}
  {#each appState.orderedEntries as entry}
    <ArticleOverview
      link={entry}
      summary={appState[entry]?.summary}
      date={entry}
    />
  {/each}
{/await}
