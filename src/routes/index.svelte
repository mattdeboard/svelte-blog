<script>
  import ArticleSummary from "../components/ArticleList/ArticleSummary.svelte";

  let articles = [
    {
      summary: "Use git & Python to auto-generate changelogs.",
      title: "Using git & Python to autogen changelogs",
      date: "2014/01/14",
    },
    {
      summary: "mono-service + supervisor",
      title: "How to Run a Windows Service As A Linux Daemon",
      date: "2012/10/19",
    },
    {
      summary: "Is programming an 'elite' career?",
      title: "Larry the Software Guy",
      date: "2012/10/05",
    },
    {
      summary: "A drop-in Haystack resource class for django-tastypie APIs.",
      title: "REST API for search results",
      date: "2012/02/07",
    },
    {
      summary: "",
      title: "Displacing MySQL with...Solr?,",
      date: "2011/12/29",
    },
    { summary: "", title: "How I Became a Programmer,", date: "2011/11/23" },
    {
      summary: "Help with hitting eject from Facebook",
      title: "Export ALL Your Facebook Photos Easily",
      date: "2011/07/01",
    },
    {
      summary: "In which hard work pays off.",
      title: "Changing Careers at 31",
      date: "2011/06/17",
    },
    {
      summary:
        "Generate LaTeX-formatted string representation of a Chebyshev polynomial of nth degree.",
      title: "Chebyshev polynomials in LaTeX",
      date: "2011/05/13",
    },
    {
      summary: "A setback is just a setup for a-- oh dear I frew up.",
      title: "Python-Powered Smash'n'Grab",
      date: "2011/05/12",
    },
    {
      summary: "Config & maintenance of Armin Ronacher's rstblog",
      title: "My guide to rstblog",
      date: "2011/05/09",
    },
    {
      summary: "Haystack/Whoosh auto-update script for Django",
      title: "Haystack index update script + cronjob",
      date: "2011/05/08",
    },
    {
      summary: "Be lazy.",
      title: "Python code deployment with Fabric",
      date: "2011/05/06",
    },
    { summary: "Derek died.", title: "No Regrets,", date: "2011/05/04" },
    { summary: "My latest projects", title: "Latest work", date: "2011/02/14" },
    { summary: "New blog", title: "No More Tumblr", date: "2011/01/27" },
    {
      summary: "A recap of my work with Trunk.ly.",
      title: "Initiative and Assistance",
      date: "2010/12/27",
    },
  ];
</script>

{#each articles as article}
  <ArticleSummary {...article} />
{/each}
