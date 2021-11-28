<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ fetch }) {
    return true;
  }
</script>

<script lang="ts">
  import Article from "../components/Article.svelte";
  import { indexStore } from "../stores";
  import kv from "cloudflare-workers-kv";

  kv.init({
    variableBinding: import.meta.env.VITE_KV_BINDING,
    namespaceId: import.meta.env.VITE_PARSED_ARTICLES_NAMESPACE_ID,
    accountId: import.meta.env.VITE_ACCOUNT_ID,
    email: import.meta.env.VITE_EMAIL_ADDR,
    apiKey: import.meta.env.VITE_WORKERS_KV_API_KEY,
  });
  let appState;

  let promise = Promise.resolve("");
  indexStore.subscribe(async state => {
    await state;
    appState = state;
  });

  async function fetchDates() {
    // globalThis.fetch = fetch;
    if (globalThis.window) globalThis.window.fetch = fetch;

    // let keys: {
    //   keys: {
    //     name: `20${number}${number}/${number}${number}/${number}${number}`;
    //   }[];
    // } = await kv.list();

    // const orderedEntries = keys.keys.map(({ name }) => name).reverse();
    // indexStore.update(state => ({
    //   ...state,
    //   orderedEntries,
    // }));
    // orderedEntries.forEach(name => {
    //   indexStore.update(state =>
    //     kv.get(name).then(resp => {
    //       return {
    //         ...state,
    //         [name]: JSON.parse(resp),
    //       };
    //     })
    //   );
    // });
  }
  let entries;
  fetchDates();
  import ArticleList from "../components/ArticleList/ArticleList.svelte";
  // import SvelteMarkdown from 'svelte-markdown';

  // async function fetchPost() {
  // 	const data = await fetch(
  // 		'/src/posts/2014/01/14/automatic-changelog-generation-with-git.md'
  // 	).then((response) => response.text());
  // 	console.log('Data:', data);
  // 	return data;
  // }
  // let promise = fetchPost();
</script>

<ArticleList {appState} />
<!-- {#await promise} -->
<!-- <p>...waiting</p> -->
<!-- {:then markdown} -->
<!-- <SvelteMarkdown source={markdown} /> -->
<!-- <Article /> -->
<!-- {/await} -->
