import * as S from "./styles";

export interface UserInfoProtocol {
  name: string;
  subtitle: string;
  image: string;
}

export interface UserProfileProps {
  userInfo: UserInfoProtocol;
}

export const UserProfile = ({ userInfo }: UserProfileProps) => {
  return (
    <S.Wrapper>
      {userInfo.image && <S.Image src={userInfo.image} alt={userInfo.name} />}
      <S.Heading>{userInfo.name}</S.Heading>
      <S.Subtitle>{userInfo.subtitle}</S.Subtitle>
    </S.Wrapper>
  );
};
