import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

import { SidebarProject } from "../../../../src/components/sidebar/items/project";
import { SidebarResource } from "../../../../src/components/sidebar/items/resource";
import { SidebarRoot } from "../../../../src/components/sidebar/root";
import { violations } from "../../../support/axe";

function Tree({ unreachable = false }: { unreachable?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarRoot label="Projects" top={null} footer={null}>
      <SidebarProject name="prod-infra" total={2} live={1} unreachable={unreachable} busy open={open} onOpenChange={setOpen} add={[]} entries={[]}>
        <SidebarResource name="api-1" kind="host" link="online" activity="working" entries={[]} />
        <SidebarResource name="bastion" kind="host" link="unreachable" entries={[]} />
      </SidebarProject>
    </SidebarRoot>
  );
}

describe("SidebarProject", () => {
  it("shows live out of total and opens to reveal its resources", async () => {
    render(<Tree />);

    const head = screen.getByRole("button", { name: /prod-infra/ });

    expect(head).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("1/2")).toHaveAttribute("data-state", "live");
    expect(screen.queryByRole("button", { name: "api-1" })).not.toBeInTheDocument();

    await userEvent.click(head);

    expect(screen.getByRole("button", { name: "api-1" })).toBeVisible();
  });

  it("keeps showing agent work while folded", () => {
    const { container } = render(<Tree />);

    expect(container.querySelector('canvas[data-activity="working"]')).toBeInTheDocument();
  });

  it("turns its count red when something inside is unreachable", () => {
    render(<Tree unreachable />);

    expect(screen.getByText("1/2")).toHaveAttribute("data-state", "unreachable");
  });

  it("moves with the arrow keys", async () => {
    render(<Tree />);

    const head = screen.getByRole("button", { name: /prod-infra/ });

    head.focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(head).toHaveAttribute("aria-expanded", "true");

    await userEvent.keyboard("{ArrowDown}");
    expect(screen.getByRole("button", { name: "api-1" })).toHaveFocus();

    await userEvent.keyboard("{ArrowLeft}");
    expect(head).toHaveFocus();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Tree />);

    expect(await violations(container)).toEqual([]);
  });
});
