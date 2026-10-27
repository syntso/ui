import type { Story } from "@ladle/react";
import { Ellipsis, Plus } from "lucide-react";

import { Button } from "../src/components/button";
import { IconButton } from "../src/components/icon-button";
import { Key } from "../src/components/key";
import { MenuContext, MenuDropdown } from "../src/components/menu";

import { host } from "./entries";

export const Buttons: Story = () => (
  <div className="flex flex-col gap-4 p-10">
    <div className="flex gap-2">
      <Button>Deny</Button>
      <Button>Until restart</Button>
      <Button variant="primary" shortcut="↵">
        Allow once
      </Button>
    </div>
    <div className="flex items-center gap-2">
      <IconButton label="Add" shortcut="⌘N">
        <Plus />
      </IconButton>
      <IconButton label="More" size="small">
        <Ellipsis />
      </IconButton>
      <Key>⌘K</Key>
    </div>
  </div>
);

export const Menus: Story = () => (
  <div className="flex flex-col gap-4 p-10">
    <MenuDropdown entries={host}>
      <Button className="self-start">Open menu</Button>
    </MenuDropdown>
    <MenuContext entries={host}>
      <div className="rounded-row bg-hover p-10 text-muted">Right-click here</div>
    </MenuContext>
  </div>
);
