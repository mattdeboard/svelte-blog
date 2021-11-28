<script context="module" lang="ts">
  import Article from "../../../../components/Article.svelte";
  import { indexStore } from "../../../../stores";

  type ArticleKey =
    `20${number}${number}/${number}${number}/${number}${number}`;
  let body: string, tags: string, pubDate: ArticleKey;

  import kv from "cloudflare-workers-kv";
  let hasFetched = false;

  indexStore.subscribe(state => {
    hasFetched = state.hasFetched;
  });
  // console.log(hasFetched);

  kv.init({
    variableBinding: import.meta.env.VITE_KV_BINDING,
    namespaceId: import.meta.env.VITE_PARSED_ARTICLES_NAMESPACE_ID,
    accountId: import.meta.env.VITE_ACCOUNT_ID,
    email: import.meta.env.VITE_EMAIL_ADDR,
    apiKey: import.meta.env.VITE_WORKERS_KV_API_KEY,
  });

  export async function load({ page }) {
    const response = await kv.get(
      `${page.params.pubYear}/${page.params.pubMonth}/${page.params.pubDay}`
    );
    const parsedResponse = JSON.parse(response);
    body = parsedResponse?.body;
    tags = parsedResponse?.tags;
    pubDate =
      `${page.params.pubYear}/${page.params.pubMonth}/${page.params.pubDay}` as ArticleKey;
    indexStore.update(state => {
      return {
        ...state,
        hasFetched: true,
      };
    });
    return parsedResponse;
  }
</script>

{#if body}
  <Article date={pubDate} source={body} {tags} />
{/if}
