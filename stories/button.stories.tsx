import type { Story } from "@ladle/react";
import { Ellipsis, Plus } from "lucide-react";

import { Button } from "../src/components/button/root";
import { IconButton } from "../src/components/icon-button/root";
import { Key } from "../src/components/key/root";

import { Frame } from "./support/frame";

export const Variants: Story = () => (
  <Frame>
    <div style={{ display: "flex", gap: 8 }}>
      <Button>Deny</Button>
      <Button>Until restart</Button>
      <Button variant="primary" shortcut="↵">
        Allow once
      </Button>
    </div>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <IconButton label="Add" shortcut="⌘N">
        <Plus />
      </IconButton>
      <IconButton label="More" size="small">
        <Ellipsis />
      </IconButton>
      <Key>⌘K</Key>
    </div>
  </Frame>
);
