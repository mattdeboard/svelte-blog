<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	// export let title: string;
	// export let articleBody: string;

	// export let date: `20${number}${number}/${number}${number}/${number}${number}`;
	let date = '::date::';
	let source = '::source::';
</script>

<div>
	<!-- <h1 class="title">{title}</h1> -->
	<p class="date">written on {date}</p>
	<div class="content">
		<!-- svelte-ignore missing-declaration -->
		<SvelteMarkdown {source} />
	</div>
</div>
