#!/usr/bin/bash
process_posts() {
  f="$1"
  ppath="${f#/*/*/*/*/*/*/*}"
  the_key=$(dirname $ppath)
  the_filename=$(basename $f)
  header=$(head -n3 $f | sed -z 's/\n/,/g; s/,$//')
  cat <<-EOM >ARTICLE
  let source = \`
$(tail -n +5 $f)
\`;
EOM
  cat <<-EOM >ARTICLE_DATE
  let date = "$the_key";
EOM
  cat ARTICLE_DATE
  mkdir -p src/routes/$the_key/
  sed -e '/::source::/{r ARTICLE' -e 'd}; /::date::/{r ARTICLE_DATE' -e 'd}' src/components/Article.svelte >src/routes/$the_key/index.svelte
}

export -f process_posts

find $(pwd)/src/posts/ -name "*.md" -type f -print0 | xargs -0 -I{} bash -c 'process_posts "{}"'
npm run format
rm ARTICLE
rm ARTICLE_DATE
