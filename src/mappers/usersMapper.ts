import { TableData } from "../components/Table";

import { RandomUserResponse } from "../infra/api";

export const usersMapper = (data: RandomUserResponse): TableData[] => {
  return data.results.map((result) => ({
    id: result.login.uuid,
    firstName: result.name.first,
    lastName: result.name.last,
    title: result.name.title,
    age: result.dob.age,
    date: new Date(result.dob.date).toDateString(),
  }));
};
