import type { Story } from "@ladle/react";

import { Mark } from "../src/components/mark";

export const Sizes: Story = () => (
  <div className="flex items-end gap-6 p-10 text-ink">
    <Mark size={16} />
    <Mark size={32} />
    <Mark size={96} />
  </div>
);
