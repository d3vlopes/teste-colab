import { it, describe, expect, vitest } from "vitest";
import { screen, waitFor } from "@testing-library/react";

import { testHelper } from "../../helpers";

import { HomeLayout } from ".";

vitest.mock("../../components/Search", () => ({
  __esModule: true,
  Search: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Search">{children}</div>;
  },
}));

vitest.mock("../../components/Table", () => ({
  __esModule: true,
  Table: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Table">{children}</div>;
  },
}));

const { getByRole, getByTestId, findByTestId, getByLabelText } = screen;

describe("HomeLayout", () => {
  it("should render HomeLayout", async () => {
    testHelper(<HomeLayout />);

    const heading = getByRole("heading", { name: "List Users" });
    const search = getByTestId("Mock Search");
    const table = findByTestId("Mock Table");
    const loading = getByLabelText("Icon of dots loading");

    expect(heading).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      expect(table).toBeTruthy();
      expect(loading).not.toBeInTheDocument();
    });
  });
});
