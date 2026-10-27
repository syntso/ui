# Contributing

- Every component lives in its own folder under `src/components`, split by part: `root.tsx`, `properties.ts`, `styles.module.css`, and one file per further part or helper.
- File names never repeat their folder's name. Exported names carry the component's name: `SidebarProject`, `MenuDropdown`.
- Styles use tokens only (`var(--synt-…)`), and states and variants go through `data-*` attributes.
- Tests live in `tests/`, mirroring `src/`. Every component has a story in `stories/`.
- No comments in code.
- Commits are one Conventional Commits line, checked by `.githooks/commit-msg`.

Contributions are accepted under the [Synt UI License](LICENSE.md); by opening a pull request you agree that Synt may ship your change under it and under other licenses.
