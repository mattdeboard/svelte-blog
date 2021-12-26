#!/usr/bin/bash

process_posts() {
  f="$1"
  # Strip off directory names until we get to YYYY/MM/DD/something.md
  ppath="${f#/*/*/*/*/*/*/*}"
  # This is the YYYY/MM/DD part of the article path
  the_key=$(dirname $ppath)
  the_filename=$(basename $f)
  header=$(head -n5 $f | sed -z 's/\n/,/g; s/,$//')
  summary=$(create_summary "$header")
  title=$(get_title "$header")

  # Assign the article's raw markdown to a variable lol
  # Doing this so the SvelteMarkdown component can render it like it
  # is supposed to.
  cat <<-EOM >ARTICLE
  let source = \`
$(tail -n +4 $f | sed -e 's/\\/\\\\/g' | sed -e 's/`/\\`/g')
\`;
EOM

  cat <<-EOM >ARTICLE_DATE
  let date = "$the_key";
EOM

  cat <<-EOM >ARTICLE_TITLE
  let title = "$title"
EOM

  cat <<-EOM >ARTICLE_SUMMARY
  let summary = "$summary"
EOM

  echo '{"summary": "'$summary'", "title": "'$title'", "date": "'$the_key'"},' >>articles.js
  mkdir -p src/routes/$the_key/
  sed -e '/::source::/{r ARTICLE' -e 'd}; /::date::/{r ARTICLE_DATE' -e 'd}' src/components/Article.svelte >src/routes/$the_key/index.svelte
}

create_summary() {
  header="$1"
  ptn='summary:[[:space:]]([^,]*)'
  trimmed=-1

  if [[ "$header" =~ $ptn ]]; then
    ptn_match="${BASH_REMATCH[1]}"
    trimmed=$(echo $ptn_match | sed -z 's/ *|\n$//g')
    echo $trimmed
  fi
}

get_title() {
  header="$1"
  ptn='#[[:space:]](.*)'
  trimmed=-1

  if [[ "$header" =~ $ptn ]]; then
    ptn_match="${BASH_REMATCH[1]}"
    trimmed=$(echo $ptn_match | sed -z 's/ *|\n$//g')
    echo $trimmed
  fi
}

create_index() {
  sed -e '/::articles::/{r articles.js' -e 'd}' src/index.svelte.template >src/routes/index.svelte
}
export -f process_posts
export -f create_summary
export -f get_title
export -f create_index
echo "let articles = [" >articles.js
# Create the index.svelte file for every blog post in src/posts
find $(pwd)/src/posts/ -name "*.md" -type f | sort -r | xargs -I{} bash -c 'process_posts "{}"'
echo "]" >>articles.js
rm ARTICLE*
create_index
rm articles.js
npm run format
