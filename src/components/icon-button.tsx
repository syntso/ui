import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProperties extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string;
  shortcut?: string;
  size?: "regular" | "small";
  children: ReactNode;
}

const sizes = {
  regular: "size-7 [&_svg]:size-[15px]",
  small: "size-[22px] [&_svg]:size-3.5",
};

export function IconButton({ label, shortcut, size = "regular", className = "", children, type = "button", ...properties }: IconButtonProperties) {
  return (
    <button
      {...properties}
      type={type}
      aria-label={label}
      title={shortcut ? `${label}  ${shortcut}` : label}
      className={`grid shrink-0 place-items-center rounded-control text-muted transition-colors duration-120 ease-out hover:bg-select hover:text-ink data-[state=open]:bg-select data-[state=open]:text-ink ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
