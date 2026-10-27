import { liveCount } from "../../../../src/components/sidebar/items/count";

describe("liveCount", () => {
  it("shows live out of total when something is connected", () => {
    expect(liveCount(5, 6)).toBe("5/6");
  });

  it("shows only the total when nothing is", () => {
    expect(liveCount(0, 6)).toBe("6");
  });
});
