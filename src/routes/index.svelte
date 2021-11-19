<script lang="ts">
	import Article from '../components/Article.svelte';
	import ArticleList from '../components/ArticleList/ArticleList.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	async function fetchPost() {
		const data = await fetch(
			'/src/posts/2014/01/14/automatic-changelog-generation-with-git.md'
		).then((response) => response.text());
		console.log('Data:', data);
		return data;
	}
	let promise = fetchPost();
</script>

{#await promise}
	<p>...waiting</p>
{:then markdown}
	<!-- <SvelteMarkdown source={markdown} /> -->
	<Article title="Neato" articleBody={markdown} date="Today!" />
{/await}
