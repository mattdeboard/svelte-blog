<script>
  import github from "svelte-highlight/src/styles/github";
  import NavBar from "$components/NavBar.svelte";
</script>

<svelt:head>
  {@html github}
</svelt:head>

<div class="container">
  <NavBar />

  <div class="span-14" id="content">
    <slot />
  </div>

  <div class="span-24 last" id="footer" />
  <div class="span-24 last" id="disqus_thread" />
</div>
