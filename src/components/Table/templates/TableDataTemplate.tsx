import { Link } from "react-router-dom";

import { formatDate } from "../../../utils";

import { TableData } from "..";

import * as S from "../styles";

export const TableDataTemplate = (user: TableData) => {
  return (
    <S.Tr key={user.id}>
      <S.Td data-testid="value-id">{user.id.slice(0, 8)}</S.Td>
      <S.Td data-testid="value-first-name">{user.firstName}</S.Td>
      <S.Td data-testid="value-last-name">{user.lastName}</S.Td>
      <S.Td data-testid="value-title">{user.title}</S.Td>
      <S.Td data-testid="value-date">{formatDate(user.date)}</S.Td>
      <S.Td data-testid="value-age">{user.age}</S.Td>
      <S.Td>
        <Link to={`/user/${user.id}`}>View Profile</Link>
      </S.Td>
    </S.Tr>
  );
};
