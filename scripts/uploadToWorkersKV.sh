#!/usr/bin/bash

# put_tags() {
#   key=$1
#   header=$2

#   ptn='tags:[[:space:]]\[(.*)\]'
#   if [[ "$header" =~ $ptn ]]; then
#     ptn_match="${BASH_REMATCH[1]}"
#     ./node_modules/.bin/wrangler kv:key put --namespace-id=fe6cd392ea034f39bf62c5c9ea18d34d "$key" "$ptn_match"
#   fi
# }

# put_summaries() {
#   key=$1
#   header=$2
#   ptn='summary: ([^,]*)'

#   if [[ "$header" =~ $ptn ]]; then
#     ptn_match="${BASH_REMATCH[1]}"
#     trimmed=$(echo $ptn_match | sed -z 's/ *|\n$//g')
#     ./node_modules/.bin/wrangler kv:key put --namespace-id=30fd667d4b0b45b093aad6f1924ff437 "$key" "$trimmed"
#   fi
# }

# put_public_status() {
#   key=$1
#   header=$2
#   ptn='public:[[:space:]]([^,]*)'
#   if [[ "$header" =~ $ptn ]]; then
#     ptn_match="${BASH_REMATCH[1]}"
#     ./node_modules/.bin/wrangler kv:key put --namespace-id=04f5f3b4b415442e9613af05e0c7a843 "$key" "$ptn_match"
#   fi
# }

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

  cat <<-EOM >ARTICLE
  let source = \`
$(tail -n +4 $f | sed -e 's/`/\\`/g')
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

  echo '{"summary": "'$summary'", "title": "'$title'", "date": "'$the_key'"},' >>articles.json
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
export -f process_posts
export -f create_summary
export -f get_title

echo "[" >articles.json
# Create the index.svelte file for every blog post in src/posts
find $(pwd)/src/posts/ -name "*.md" -type f -print0 | xargs -0 -I{} bash -c 'process_posts "{}"'
echo "]" >>articles.json
rm ARTICLE*
npm run format
