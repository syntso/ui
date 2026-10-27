import * as Radix from "@radix-ui/react-dropdown-menu";

import { MenuEntries } from "./entries";
import type { MenuDropdownProperties } from "./properties";
import styles from "./styles.module.css";

export function MenuDropdown({ entries, align = "start", children }: MenuDropdownProperties) {
  return (
    <Radix.Root modal={false}>
      <Radix.Trigger asChild>{children}</Radix.Trigger>
      <Radix.Portal>
        <Radix.Content className={styles.menu} align={align} sideOffset={4} collisionPadding={8}>
          <MenuEntries entries={entries} parts={Radix} />
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
}
