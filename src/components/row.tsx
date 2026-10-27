import type { ReactNode } from "react";

export interface RowProperties {
  lead?: ReactNode;
  title: ReactNode;
  detail?: ReactNode;
  trailing?: ReactNode;
  selected?: boolean;
  onOpen?: () => void;
}

export function Row({ lead, title, detail, trailing, selected = false, onOpen }: RowProperties) {
  return (
    <div
      data-selected={selected || undefined}
      className="relative -mx-2.5 grid min-h-11 grid-cols-[28px_1fr_auto] items-center gap-3 rounded-row px-2.5 py-2 hover:bg-hover data-[selected]:bg-select"
    >
      <span className="grid place-items-center text-muted [&_svg]:size-4">{lead}</span>
      <span className="flex min-w-0 flex-col">
        {onOpen ? (
          <button
            type="button"
            onClick={onOpen}
            className="truncate text-left after:absolute after:inset-0 after:rounded-row focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-muted"
          >
            {title}
          </button>
        ) : (
          <span className="truncate">{title}</span>
        )}
        {detail && <span className="truncate text-small text-muted">{detail}</span>}
      </span>
      {trailing && <span className="relative flex items-center gap-2 text-small text-faint">{trailing}</span>}
    </div>
  );
}
