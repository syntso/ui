# Synt UI

The components and design tokens of [Synt](https://github.com/syntso/synt), for building extensions that look and behave like the app.

React 19 on [Radix](https://www.radix-ui.com) primitives, with Synt's own styles. Dark and light themes follow the system, or are pinned with `data-theme` on any ancestor.

<br />

## Use

```bash
pnpm add @synt/ui
```

Load the styles once, then import each component from its own entry:

```tsx
import "@synt/ui/styles.css";

import { Approval } from "@synt/ui/approval";
import { Button } from "@synt/ui/button";
import { MenuDropdown } from "@synt/ui/menu";
```

<br />

## Components

| Entry | |
|---|---|
| `pulse` | The agent's presence: idle, working, or waiting for you |
| `approval` | What the core asks before an agent touches a host |
| `button`, `icon-button`, `key` | Actions and shortcuts |
| `menu` | Dropdown and context menus built from data |
| `sidebar` | Places, projects, resources, account and the resize grip |
| `connect-field` | The field that connects to anything by name, address or `ssh` command |
| `section`, `row` | Lists |
| `glyph` | Kinds of resources and their connection state |
| `copy-line`, `status-bar` | A command to run elsewhere, and the window's status line |

How each one behaves and why is written down in the design notes that ship with Synt.

<br />

## Develop

```bash
git clone https://github.com/syntso/ui.git
cd ui
git config core.hooksPath .githooks
pnpm install
pnpm dev
```

`pnpm dev` opens the catalog with every component in every state. `pnpm test` runs the tests, `pnpm build` builds the package.

<br />

## License

The [Synt UI License](LICENSE.md). The source is public, and you may use it to build extensions, themes and integrations for Synt. It is not open source: any other use needs an agreement, write to license@synt.so.
