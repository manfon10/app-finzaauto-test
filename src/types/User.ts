import { ChangeEvent, ReactNode } from "react";

export interface IUserOptionProps {
  image: string;
}

export interface IFormUserProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabledData?: boolean;
}

export interface IDataUser {
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
  id: string;
}

export interface IResultSearchProps {
  children: ReactNode;
}

export interface IButtonFormProps {
  textButton: string;
}
