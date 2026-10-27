import type { Story } from "@ladle/react";

import { Button } from "../src/components/button/root";
import { MenuContext } from "../src/components/menu/context";
import { MenuDropdown } from "../src/components/menu/dropdown";

import { hostEntries } from "./support/entries";
import { Frame } from "./support/frame";

export const Dropdown: Story = () => (
  <Frame>
    <MenuDropdown entries={hostEntries}>
      <Button>Open menu</Button>
    </MenuDropdown>
  </Frame>
);

export const Context: Story = () => (
  <Frame>
    <MenuContext entries={hostEntries}>
      <div style={{ padding: 40, borderRadius: 8, background: "var(--synt-hover)", color: "var(--synt-muted)" }}>Right-click here</div>
    </MenuContext>
  </Frame>
);
