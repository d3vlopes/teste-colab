import { RandomUserResponse } from "../../../infra/api";

import { api } from "../../../services";

export async function getUsers(number: number) {
  try {
    const { data } = await api.get<RandomUserResponse>(
      `/?seed=colab&results=${number}`
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
