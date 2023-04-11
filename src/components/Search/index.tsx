import { InputHTMLAttributes } from "react";

import * as S from "./styles";

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

export type SearchProps = BaseInputProps;

export const Search = ({ ...props }: SearchProps) => {
  return <S.Input {...props} type="search" placeholder="Search user..." />;
};
