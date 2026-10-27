import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../../src/components/button";

describe("Button", () => {
  it("is quiet by default and never submits a form", () => {
    render(<Button>Retry</Button>);

    const button = screen.getByRole("button", { name: "Retry" });

    expect(button).toHaveAttribute("data-variant", "quiet");
    expect(button).toHaveAttribute("type", "button");
  });

  it("shows its shortcut and runs its action", async () => {
    const click = vi.fn();

    render(
      <Button variant="primary" shortcut="↵" onClick={click}>
        Allow once
      </Button>,
    );

    await userEvent.click(screen.getByRole("button", { name: /Allow once/ }));

    expect(click).toHaveBeenCalledOnce();
  });
});
