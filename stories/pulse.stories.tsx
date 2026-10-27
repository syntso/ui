import type { Story } from "@ladle/react";

import { Pulse } from "../src/components/pulse";

export const Modes: Story = () => (
  <div className="flex flex-col gap-4 p-10">
    <span>Idle</span>
    <Pulse activity="idle" />
    <span>Working</span>
    <Pulse activity="working" />
    <span>Waiting for you</span>
    <Pulse activity="waiting" />
    <span>Small</span>
    <Pulse activity="working" size="small" />
  </div>
);
