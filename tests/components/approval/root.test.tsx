import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Approval } from "../../../src/components/approval/root";
import { violations } from "../../support/axe";

function renderApproval(privileged: boolean) {
  const onAnswer = vi.fn();
  const view = render(
    <Approval
      agent="claude-code"
      command="sudo systemctl restart api"
      target="api-1 · prod-infra"
      reason="privileged, asked every time"
      privileged={privileged}
      onAnswer={onAnswer}
    />,
  );

  return { onAnswer, ...view };
}

describe("Approval", () => {
  beforeEach(() => vi.useFakeTimers());

  afterEach(() => vi.useRealTimers());

  it("asks a privileged command only once", () => {
    renderApproval(true);

    expect(screen.getAllByRole("button").map(button => button.textContent)).toEqual(["Deny", "Allow once↵"]);
  });

  it("keeps wider grants for ordinary actions behind the main one", async () => {
    vi.useRealTimers();
    renderApproval(false);

    await userEvent.click(screen.getByRole("button", { name: "Wider grants" }));

    expect(screen.getAllByRole("menuitem").map(item => item.textContent)).toEqual(["Always for this host", "Until restart"]);
  });

  it("marks the elevated part of the command", () => {
    renderApproval(true);

    expect(screen.getByText("sudo")).toHaveClass("elevated");
  });

  it("ignores answers until it has been on screen for a moment", () => {
    const { onAnswer } = renderApproval(true);

    fireEvent.click(screen.getByRole("button", { name: /Allow once/ }));
    expect(onAnswer).not.toHaveBeenCalled();

    act(() => vi.advanceTimersByTime(600));
    fireEvent.click(screen.getByRole("button", { name: /Allow once/ }));
    expect(onAnswer).toHaveBeenCalledWith("once");
  });

  it("answers with Enter and denies with Escape", () => {
    const { onAnswer } = renderApproval(false);
    const group = screen.getByRole("group", { name: "claude-code is waiting for you" });

    act(() => vi.advanceTimersByTime(600));
    fireEvent.keyDown(group, { key: "Enter" });
    fireEvent.keyDown(group, { key: "Escape" });

    expect(onAnswer.mock.calls).toEqual([["once"], ["deny"]]);
  });

  it("has no accessibility violations", async () => {
    vi.useRealTimers();

    const { container } = renderApproval(true);

    expect(await violations(container)).toEqual([]);
  });
});
