import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getUsers } from "../../http/requests";

import { tabUserProfileMapper, userInfoMapper } from "../../mappers";

import { TabUserProfileProps, UserInfoProtocol } from "../../components";

import { renderContent, renderError, renderLoading } from "./renders";

import * as S from "./styles";

export const UserLayout = () => {
  const [userInfo, setUserInfo] = useState({} as UserInfoProtocol);
  const [tabUserInfo, setTabUserInfo] = useState({} as TabUserProfileProps);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    async function loadUsers() {
      setIsLoading(true);

      try {
        const data = await getUsers(10);
        const user = data.results.find((user) => user.login.uuid === id);

        if (!user) {
          setError("User not found");
          return;
        }

        const infoMapper = userInfoMapper(user);
        const tabMapper = tabUserProfileMapper(user);

        setUserInfo(infoMapper);
        setTabUserInfo(tabMapper);
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
      {isLoading && renderLoading()}
      {!!error && renderError(error)}
      {tabUserInfo.info && renderContent(userInfo, tabUserInfo)}
    </S.Wrapper>
  );
};
