import { UserInfoProtocol } from "../components";
import { RandomUserResult } from "../infra/api";

export const userInfoMapper = (data: RandomUserResult): UserInfoProtocol => {
  return {
    image: data.picture.large,
    name: `${data.name.first} ${data.name.last}`,
    subtitle: data.name.title,
  };
};
