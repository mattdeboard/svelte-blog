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
		<SvelteMarkdown source={articleBody} />
	</div>
</div>
