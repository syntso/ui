import type { ReactNode } from "react";

import type { Kind } from "../../models/resource";

export const paths: Record<Kind, ReactNode> = {
  host: (
    <>
      <rect x="2" y="2.5" width="10" height="9" rx="1.5" />
      <path d="M4.5 5.5 6 7 4.5 8.5" />
    </>
  ),
  cluster: <path d="M7 1.8 11.5 4.4v5.2L7 12.2 2.5 9.6V4.4z" strokeLinejoin="round" />,
  database: (
    <>
      <ellipse cx="7" cy="3.6" rx="4.5" ry="1.6" />
      <path d="M2.5 3.6v6.8c0 .9 2 1.6 4.5 1.6s4.5-.7 4.5-1.6V3.6M2.5 7c0 .9 2 1.6 4.5 1.6S11.5 7.9 11.5 7" />
    </>
  ),
  tunnel: <path d="M2 7h8.5M8 4.5 10.5 7 8 9.5M12 3v8" />,
};
