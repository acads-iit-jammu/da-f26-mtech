# Data Analysis · M.Tech · Monsoon 2026

Course website skeleton for Data Analysis, IIT Jammu. Instructor: Soma S Dhavala.
The syllabus, course code, credits, timetable, and assessment scheme are pending.

Adapted from [diffusion-models-f26](https://github.com/acads-iit-jammu/diffusion-models-f26), retaining the Quarto book layout and IIT Jammu themes.

## Preview and build

Install [Quarto](https://quarto.org/), then run:

```sh
quarto preview
quarto render
```

The rendered website is written to `_site/` (ignored by Git).

## Layout

- `_quarto.yml` — navigation and site configuration
- `iitjammu.scss` — IIT Jammu book theme
- `index.qmd`, `course.qmd`, `syllabus.qmd`, `curriculum.qmd` — course overview and plan
- `assignments.qmd`, `decks.qmd`, `resources.qmd` — coursework, slides, and reading list
- `tutorials/` — lecture notes and a reusable template
- `slides/` — revealjs configuration, theme, template, and build script
- `materials/` — student-facing assets and rendered decks
- `homeworks/` — homework sources and handouts
- `drafts/` — tracked work in progress
- `private/` — optional instructor-only directory, ignored by Git

## Add course content

1. Fill in the syllabus and confirmed logistics.
2. Copy `tutorials/_template.qmd` for each lecture and register it under `book.chapters` in `_quarto.yml`.
3. Follow `slides/README.md` to create and link slide decks.
4. Add released homework files to `project.resources` and link them from `assignments.qmd`.

## Publish when ready

GitHub Pages must be available and enabled for this repository before publishing:

```sh
quarto publish gh-pages
```

The configured site URL is `https://acads-iit-jammu.github.io/da-f26-mtech`.
Creating this skeleton does not publish the website.

## License

CC0 1.0 Universal; see `LICENSE`.
