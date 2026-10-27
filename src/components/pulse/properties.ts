import type { Activity } from "../../models/agent";

import type { grids } from "./grids";

export interface PulseProperties {
  activity: Activity;
  size?: keyof typeof grids;
}
