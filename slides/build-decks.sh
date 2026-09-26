#!/bin/sh
# Render all decks, or the deck names supplied as arguments.
set -eu
cd "$(dirname "$0")"
if [ "$#" -eq 0 ]; then set -- *.qmd; fi
built=0
for deck in "$@"; do
  deck="${deck%.qmd}.qmd"
  case "$deck" in _*) continue ;; esac
  if [ ! -f "$deck" ]; then
    echo "Deck not found: $deck" >&2
    exit 1
  fi
  quarto render "$deck"
  built=1
  echo "Built ../materials/${deck%.qmd}.html"
done
if [ "$built" -eq 0 ]; then
  echo "No decks yet. Copy _template.qmd to w01-deck-01-topic.qmd to start."
fi
