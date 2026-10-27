import type { GlobalProvider } from "@ladle/react";

import "../src/theme/root";
import "./catalog.css";

export const Provider: GlobalProvider = ({ children }) => <div className="catalog">{children}</div>;
