<script>
  import github from "svelte-highlight/src/styles/github";
  import NavBar from "$components/NavBar.svelte";
</script>

<svelt:head>
  {@html github}
  <link
    href="http://fonts.googleapis.com/css?family=Vollkorn&amp;subset=latin"
    rel="stylesheet"
    type="text/css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
</svelt:head>

<div class="container">
  <NavBar />

  <div class="span-14" id="content">
    <slot />
  </div>

  <div class="span-24 last" id="footer" />
  <div class="span-24 last" id="disqus_thread" />
</div>

<style>
  :global(#header) {
    border-bottom: solid 4px #000000;
  }
  :global(#header a) {
    font-family: "Helvetica Neue", Helvetica, Arial, serf;
    font-size: 50px;
    font-style: bold;
  }
  :global(#menu) {
    height: 35px;
    float: left;
    clear: both;
    background-color: #f0f0f0;
  }
  :global(#content) {
    float: left;
    padding-top: 20px;
  }
  :global(#footer) {
    float: left;
    clear: both;
    text-align: center;
    background-color: #f0f0f0;
    border-top: solid 4px #000000;
  }
  :global(ul) {
    color: #575757;
    font-family: "Helvetica Neue", Helvetica, Arial, serif;
    font-size: 14px;
    font-style: italic;
    list-style: #575757;
    list-style-type: square;
  }
  :global(li a:hover) {
    color: #24b200;
    border-bottom: 1px dotted;
  }
  :global(.header a) {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 30px;
    font-style: bold;
    line-height: 120px;
    text-decoration: none;
  }
  :global(#menu a) {
    color: #575757;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 21px;
    font-style: bold;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
  }
  :global(#menu a:hover) {
    color: #24b200;
    border-bottom: 1px dotted;
  }
  :global(#entry) {
    font: 16px Times New Roman;
  }
  :global(#entry .date) {
    font-style: italic;
    font-size: 14px;
  }
  :global(#entry a) {
    color: #24b200;
    border-bottom: 1px dotted;
  }
  :global(#entry a:hover) {
    color: #99fe80;
    border-bottom: 1px solid;
  }
  :global(#entry h2) {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-style: bold;
  }
  :global(#entry h3) {
    font-size: 1.3em;
    margin-bottom: 0.5em;
    font-style: italic;
  }
  :global(#main) {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
  }
  :global(.detail a) {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
    color: #0c7500;
  }
  :global(.detail a:hover) {
    color: #99fe80;
    border-bottom: 1px dotted;
  }
  :global(.detail a:visited) {
    color: #24b200;
  }
  :global(.detail .summary) {
    font-family: Times New Roman, Garamond, serif;
    font-size: 18px;
  }
  :global(.side a) {
    color: #575757;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
  }
  :global(.tags) {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
  }
  :global(tt) {
    font-size: 14px;
    color: #4070a0;
  }
  :global(li a:hover) {
    color: #24b200;
    border-bottom: 1px dotted;
  }
  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(#main) {
    width: 950px;
    margin: 0;
  }

  :global(#header) {
    width: 100%;
    height: 80px;
    clear: both;
    border-bottom: solid 4px #000000;
  }

  :global(#menu) {
    width: 100%;
    height: 35px;
    float: left;
    clear: both;
    background-color: #f0f0f0;
  }

  :global(#content) {
    width: 75%;
    float: left;
    padding-top: 20px;
  }

  :global(#side) {
    width: 250px;
    height: 500px;
    float: right;
    background-color: #f0f0f0;
  }

  :global(#footer) {
    width: 100%;
    float: left;
    clear: both;
    text-align: center;
    background-color: #f0f0f0;
    border-top: solid 4px #000000;
  }

  :global(ul) {
    color: #575757;
    font: 14px "Vollkorn", "Georgia", serif;
    list-style: #575757;
    list-style-type: square;
  }

  /*header*/
  :global(.header a) {
    font: bold 30px "Vollkorn", "Georgia", serif;
    line-height: 120px;
    text-decoration: none;
  }

  /*menu*/
  :global(.menu a) {
    color: #575757;
    font: bold 21px "Vollkorn", "Georgia", serif;
    letter-spacing: -1px;
    text-decoration: none;
  }

  /*content text*/
  :global(#main) {
    font: 20px "Vollkorn", "Georgia", serif;
    letter-spacing: 1px;
  }

  /*side*/
  :global(.side a) {
    color: #575757;
    font: 14px "Vollkorn", "Georgia", serif;
  }

  /*content links*/
  :global(a) {
    color: #575757;
    font: 20px "Vollkorn", "Georgia", serif;
  }

  /*main*/
  :global(.tags) {
    font: 14px "Vollkorn", "Georgia", serif;
  }

  /*footer*/
  :global(.foot) {
    color: #6e6e6e;
    font: italic 14px "Vollkorn", "Georgia", serif;
  }
</style>
