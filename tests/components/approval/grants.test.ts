import { grantsFor } from "../../../src/components/approval/grants";

describe("grantsFor", () => {
  it("offers only a single answer for privileged commands", () => {
    expect(grantsFor({ privileged: true })).toEqual(["once"]);
  });

  it("puts the narrowest grant last, where the main button goes", () => {
    expect(grantsFor({ privileged: false })).toEqual(["always", "restart", "once"]);
  });
});
