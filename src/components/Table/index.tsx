import { TableDataTemplate } from "./templates/TableDataTemplate";

import * as S from "./styles";

export interface TableData {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  date: string;
  age: number;
}

export interface TableProps {
  data: TableData[];
}

export const Table = ({ data }: TableProps) => {
  return (
    <S.Wrapper>
      <S.Table>
        <S.Thead data-testid="thead">
          <S.Th data-testid="id">ID</S.Th>
          <S.Th data-testid="first-name">First Name</S.Th>
          <S.Th data-testid="last-name">Last Name</S.Th>
          <S.Th data-testid="title">Title</S.Th>
          <S.Th data-testid="date">Date</S.Th>
          <S.Th data-testid="age">Age</S.Th>
          <S.Th data-testid="actions">Actions</S.Th>
        </S.Thead>

        <S.Tbody data-testid="tbody">{data.map(TableDataTemplate)}</S.Tbody>
      </S.Table>
    </S.Wrapper>
  );
};
