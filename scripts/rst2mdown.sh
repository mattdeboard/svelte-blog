#!/usr/bin/zsh
for rst_file in $(less paths.txt); do
  the_dir=$(dirname $rst_file)
  the_post_filename=$(basename $rst_file)
  # "foo-bar.rst" -> "foo-bar"
  the_post_slug="${the_post_filename%%.*}"

  if [[ ! -d $the_dir ]]; then
    mkdir -p $the_dir
  fi

  if [[ ! -f node_modules/.bin/rst2mdown ]]; then
    echo "You need to install rst2mdown"
  else
    pandoc --verbose --wrap=preserve $HOME/projects/mattdeboard.net/$rst_file -f rst -t markdown-smart -o $the_dir/$the_post_slug.md
  fi
done
