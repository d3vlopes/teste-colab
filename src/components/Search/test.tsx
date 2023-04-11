import { it, describe, expect } from "vitest";
import { screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import "jest-styled-components";

import { testHelper } from "../../helpers";

import { theme } from "../../styles/theme";

import { Search } from ".";

const { getByRole } = screen;

describe("Search", () => {
  it("should render Search", () => {
    testHelper(<Search />);

    const sut = getByRole("searchbox");

    expect(sut).toHaveAttribute("placeholder", "Search user...");
    expect(sut).toHaveStyle({
      border: `1px solid ${theme.colors.neutral[200]}`,
      "border-radius": "8px",
      color: theme.colors.neutral[200],
    });
  });

  it("should match snapshot", () => {
    testHelper(<Search />);

    const sut = getByRole("searchbox");

    expect(sut).toMatchSnapshot();
  });
});
