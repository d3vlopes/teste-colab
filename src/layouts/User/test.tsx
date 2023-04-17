import { it, describe, expect, vitest } from "vitest";
import { screen, waitFor } from "@testing-library/react";

import { testHelper } from "../../helpers";

import { UserLayout } from ".";

vitest.mock("../../components/UserProfile", () => ({
  __esModule: true,
  UserProfile: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock UserProfile">{children}</div>;
  },
}));

vitest.mock("../../components/TabUserProfile", () => ({
  __esModule: true,
  TabUserProfile: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock TabUserProfile">{children}</div>;
  },
}));

vitest.mock("react-router-dom", () => ({
  Link: () => <a href="/">Back</a>,
  useParams: () => ({ id: "cfe07a4c-8f14-4f25-b6d2-e6fecdfa7681" }),
}));

const { getByLabelText, findByRole, findByTestId } = screen;

describe("UserLayout", () => {
  it("should render user profile", async () => {
    testHelper(<UserLayout />);

    const loading = getByLabelText("Icon of dots loading");
    const back = findByRole("link");
    const userProfile = findByTestId("Mock UserProfile");
    const tabUserProfile = findByTestId("Mock TabUserProfile");

    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });

    expect(await back).toHaveTextContent("Back");
    expect(await back).toHaveAttribute("href", "/");

    expect(await userProfile).toBeInTheDocument();
    expect(await tabUserProfile).toBeInTheDocument();
  });
});
