# Slide decks

A separate Quarto revealjs project uses the matching IIT Jammu slide theme.

```sh
cd slides
cp _template.qmd w01-deck-01-topic.qmd
quarto preview w01-deck-01-topic.qmd
./build-decks.sh
```

To build one deck, run `./build-decks.sh w01-deck-01-topic`.
Rendered decks go into `materials/` and share `materials/site_libs/`.
Link each deck from `decks.qmd`, for example:

```markdown
[Lecture 1](materials/w01-deck-01-topic.html)
```

Then run `quarto render` from the repository root. The book configuration copies `materials/` into the site.
Math uses MathML. The theme supports `.note`, `.big`, `.quote`, `.accent`, and `.cols` / `.col`.
