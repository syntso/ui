import { render } from "@testing-library/react";

import { Pulse } from "../../src/components/pulse";

describe("Pulse", () => {
  it("is hidden from assistive technology and exposes its activity", () => {
    const { container } = render(<Pulse activity="waiting" size="small" />);

    const canvas = container.querySelector("canvas");

    expect(canvas).toHaveAttribute("aria-hidden", "true");
    expect(canvas).toHaveAttribute("data-activity", "waiting");
    expect(canvas).toHaveStyle({ width: "14px", height: "8px" });
  });
});
