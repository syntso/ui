import * as Radix from "@radix-ui/react-context-menu";

import { MenuEntries } from "./entries";
import type { MenuContextProperties } from "./properties";
import styles from "./styles.module.css";

export function MenuContext({ entries, children }: MenuContextProperties) {
  return (
    <Radix.Root modal={false}>
      <Radix.Trigger asChild>{children}</Radix.Trigger>
      <Radix.Portal>
        <Radix.Content className={styles.menu} collisionPadding={8}>
          <MenuEntries entries={entries} parts={Radix} />
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}
