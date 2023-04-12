import { useEffect, useState } from "react";

import { Search, TableData } from "../../components";

import { getUsers } from "../../http/requests";

import { usersMapper } from "../../mappers";

import { renderLoading, renderTable, renderError } from "./renders";

import * as S from "./styles";

export const HomeLayout = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadUsers() {
      setIsLoading(true);

      try {
        const users = await getUsers(10);
        const mapperUsers = usersMapper(users);

        setData(mapperUsers);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <S.Wrapper>
      <S.Heading>List Users</S.Heading>

      <S.SearchWrapper>
        <Search />
      </S.SearchWrapper>

      <S.Divider />

      {error && renderError(error)}
      {isLoading ? renderLoading() : renderTable(data)}
    </S.Wrapper>
  );
};
