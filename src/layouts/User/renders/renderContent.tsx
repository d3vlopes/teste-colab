import { Link } from "react-router-dom";

import {
  TabUserProfile,
  UserProfile,
  UserInfoProtocol,
  TabUserProfileProps,
} from "../../../components";

import * as S from "../styles";

export const renderContent = (
  userInfo: UserInfoProtocol,
  tabUserInfo: TabUserProfileProps
) => {
  return (
    <>
      <S.Back isCenter={false}>
        <Link to="/">Back</Link>
      </S.Back>

      <UserProfile userInfo={userInfo} />

      <S.Divider />

      <TabUserProfile {...tabUserInfo} />
    </>
  );
};
