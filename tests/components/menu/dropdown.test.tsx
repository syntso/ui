import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MenuDropdown } from "../../../src/components/menu/dropdown";
import type { MenuEntry } from "../../../src/components/menu/properties";

describe("MenuDropdown", () => {
  it("renders entries given as data and runs the chosen one", async () => {
    const disconnect = vi.fn();
    const entries: MenuEntry[] = [
      { kind: "head", title: "api-1", detail: "root@10.0.1.4" },
      { kind: "item", label: "Open terminal", shortcut: "↵" },
      { kind: "separator" },
      { kind: "item", label: "Disconnect", danger: true, onSelect: disconnect },
    ];

    render(
      <MenuDropdown entries={entries}>
        <button type="button">More</button>
      </MenuDropdown>,
    );

    await userEvent.click(screen.getByRole("button", { name: "More" }));

    expect(screen.getByText("root@10.0.1.4")).toBeInTheDocument();
    expect(screen.getAllByRole("menuitem")).toHaveLength(2);
    expect(screen.getByRole("separator")).toBeInTheDocument();

    const item = screen.getByRole("menuitem", { name: "Disconnect" });

    expect(item).toHaveAttribute("data-danger", "true");

    await userEvent.click(item);

    expect(disconnect).toHaveBeenCalledOnce();
  });
});
