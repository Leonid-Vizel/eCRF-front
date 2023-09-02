import { ReactNode } from "react";

export interface InputBlockItem {
  inputTitle: string;
  input: ReactNode;
}

export interface SelectOption {
  name: string;
  value: number | string;
}
