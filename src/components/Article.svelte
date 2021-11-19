<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
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
