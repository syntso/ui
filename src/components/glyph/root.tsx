import { paths } from "./paths";
import type { GlyphProperties } from "./properties";
import styles from "./styles.module.css";

export function Glyph({ kind, link = "offline" }: GlyphProperties) {
  return (
    <svg className={styles.glyph} data-link={link} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      {paths[kind]}
    </svg>
  );
}
