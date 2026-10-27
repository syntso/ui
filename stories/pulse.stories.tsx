import type { Story } from "@ladle/react";

import { Pulse } from "../src/components/pulse/root";

import { Frame } from "./support/frame";

export const Modes: Story = () => (
  <Frame>
    <span>Idle</span>
    <Pulse activity="idle" />
    <span>Working</span>
    <Pulse activity="working" />
    <span>Waiting for you</span>
    <Pulse activity="waiting" />
    <span>Small, as in the sidebar</span>
    <Pulse activity="working" size="small" />
  </Frame>
);
