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
# export -f put_public_status
# export -f put_summaries
# export -f put_tags

find $(pwd)/src/posts/ -name "*.md" -type f -print0 | xargs -0 -I{} bash -c 'process_posts "{}"'
