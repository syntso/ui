import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

Object.defineProperty(window, "matchMedia", {
  value: (query: string) => ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} }),
});

HTMLCanvasElement.prototype.getContext = () => null;
Element.prototype.scrollIntoView = () => {};

Element.prototype.hasPointerCapture = () => false;
Element.prototype.releasePointerCapture = () => {};

globalThis.ResizeObserver = class {
  observe() {}

  unobserve() {}

  disconnect() {}
};
