import { ChangeEvent } from "react";

export interface IButtonCreateUserProps {
  handleAction: () => void;
}

export interface IIconLeftProps {
  handleAction: () => void;
}

export interface IAlertActionProps {
  handleAction: () => void;
  handleActionCancel: () => void;
}

export interface ISearchBoxProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
