<!-- <script lang="ts">
  import Article from "src/components/Article.svelte";
  import ArticleList from "src/components/ArticleList/ArticleList.svelte";

	async function fetchPost() {
		const data = await fetch('/2014/01/14/automatic-changelog-generation-with-git.md').then(
			(response) => response.text()
		);
		return data;
	};
	let promise = fetchPost()
</script> -->
<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	export let title: string;
	export let articleBody: string;
	export let date: string;
</script>

<div>
	<h1 class="title">{title}</h1>
	<p class="date">written on {date}</p>
	<div class="content">
		<!-- svelte-ignore missing-declaration -->
		<SvelteMarkdown
			source={articleBody}
			options={{
				highlight: function (code, lang, callback) {
					require('pygmentize-bundled-cached')(
						{ lang: lang, format: 'html' },
						code,
						function (err, result) {
							callback(err, result.toString());
						}
					);
				}
			}}
		/>
	</div>
</div>
