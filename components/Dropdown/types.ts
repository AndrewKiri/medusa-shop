import { ReactNode } from "react";

export interface DropdownProps {
  shouldShow: boolean;
  children: ReactNode;
  cta?: ReactNode;
  onClickAway?: (event: Event) => void;
  className?: string;
  containerClassName?: string;
}
