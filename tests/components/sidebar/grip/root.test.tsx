import { fireEvent, render, screen } from "@testing-library/react";

import { SidebarGrip } from "../../../../src/components/sidebar/grip/root";

describe("SidebarGrip", () => {
  it("resizes with the arrow keys and resets with Enter", () => {
    const resize = vi.fn();
    const commit = vi.fn();
    const reset = vi.fn();

    render(<SidebarGrip width={252} min={200} max={360} onResize={resize} onCommit={commit} onReset={reset} />);

    const grip = screen.getByRole("separator", { name: "Resize sidebar" });

    expect(grip).toHaveAttribute("aria-valuenow", "252");

    fireEvent.keyDown(grip, { key: "ArrowRight" });
    fireEvent.keyDown(grip, { key: "ArrowLeft" });
    fireEvent.keyDown(grip, { key: "Enter" });

    expect(resize.mock.calls).toEqual([[16], [-16]]);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(reset).toHaveBeenCalledOnce();
  });
});
