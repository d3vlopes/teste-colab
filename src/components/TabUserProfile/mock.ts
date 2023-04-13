import { TabUserProfileProps } from ".";

export const tabUserMockFactory: TabUserProfileProps = {
  info: {
    firstName: "becky",
    lastName: "sims",
    gender: "female",
    title: "miss",
    email: "becky.sims@example.com",
    phone: "017684 66711",
    nationality: "GB",
  },
  location: {
    street: {
      number: 9384,
      name: "New Street",
    },
    city: "Westminster",
    state: "Grampian",
    country: "United Kingdom",
    postcode: "T52 5WB",
  },
  login: {
    uuid: "347df7f6-7ad4-42e3-915f-ee6c6f29d12c",
    username: "yellowtiger903",
    email: "becky.sims@example.com",
  },
};
