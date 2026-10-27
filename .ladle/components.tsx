import type { GlobalProvider } from "@ladle/react";

import "./catalog.css";

export const Provider: GlobalProvider = ({ children }) => <div className="min-h-dvh bg-canvas text-body text-ink">{children}</div>;
