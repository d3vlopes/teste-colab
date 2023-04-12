import { it, describe, expect } from "vitest";
import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import "@testing-library/jest-dom";
import "jest-styled-components";

import { testHelper } from "../../helpers";

import { theme } from "../../styles/theme";

import { Loading } from ".";

const { getByLabelText } = screen;

describe("Loading", () => {
  it("should render by default", () => {
    testHelper(<Loading />);

    const icon = getByLabelText("Icon of dots loading");

    expect(icon).toHaveStyle({
      color: theme.colors.primary[500],
      width: "3.4rem",
      height: "3.4rem",
    });
  });

  it("should render correct color", () => {
    const { rerender } = testHelper(
      <Loading color={theme.colors.neutral[500]} />
    );

    const icon = getByLabelText("Icon of dots loading");

    expect(icon).toHaveStyle({
      color: theme.colors.neutral[500],
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Loading color={theme.colors.neutral[100]} />
      </ThemeProvider>
    );

    expect(icon).toHaveStyle({
      color: theme.colors.neutral[100],
    });
  });

  it("should render correct sizes", () => {
    const { rerender } = testHelper(<Loading size={2} />);

    const icon = getByLabelText("Icon of dots loading");

    expect(icon).toHaveStyle({
      width: "2rem",
      height: "2rem",
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Loading size={5} />
      </ThemeProvider>
    );

    expect(icon).toHaveStyle({
      width: "5rem",
      height: "5rem",
    });
  });
});
