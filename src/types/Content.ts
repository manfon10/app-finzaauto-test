import { ReactNode } from "react";

export interface IContentProps {
  children: ReactNode;
  title: string;
  topHeight?: number;
}

export interface IUseStyleProps {
  topHeight?: number | undefined;
}
