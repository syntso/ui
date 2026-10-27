import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CopyLine } from "../../../src/components/copy-line/root";

describe("CopyLine", () => {
  it("copies the command and says so", async () => {
    const user = userEvent.setup();

    render(<CopyLine command="claude mcp add synt -- synt-mcp" />);

    await user.click(screen.getByRole("button", { name: "Copy" }));

    expect(await navigator.clipboard.readText()).toBe("claude mcp add synt -- synt-mcp");
    expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument();
  });
});
