import { TabUserProfileProps } from "../components";
import { Nationality } from "../components/TabUserProfile/templates";

import { RandomUserResult } from "../infra/api";

export const tabUserProfileMapper = (
  data: RandomUserResult
): TabUserProfileProps => {
  return {
    info: {
      email: data.email,
      firstName: data.name.first,
      lastName: data.name.last,
      title: data.name.title,
      gender: data.gender,
      phone: data.phone,
      nationality: data.nat as Nationality,
    },
    location: {
      city: data.location.city,
      street: {
        name: data.location.street.name,
        number: data.location.street.number,
      },
      country: data.location.country,
      state: data.location.state,
      postcode: data.location.postcode,
    },
    login: {
      uuid: data.login.uuid,
      username: data.login.username,
      email: data.email,
    },
  };
};
