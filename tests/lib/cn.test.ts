import { cn } from "../../src/lib/cn";

describe("cn", () => {
  it("keeps a token size and a token colour together", () => {
    expect(cn("text-body text-ink")).toBe("text-body text-ink");
  });

  it("lets a later colour win over an earlier one", () => {
    expect(cn("bg-hover", "bg-ink")).toBe("bg-ink");
  });

  it("lets a caller round only one side", () => {
    expect(cn("rounded-control", "rounded-r-none")).toBe("rounded-control rounded-r-none");
  });

  it("drops false conditions", () => {
    const hidden = false;

    expect(cn("flex", hidden && "hidden", undefined)).toBe("flex");
  });
});
