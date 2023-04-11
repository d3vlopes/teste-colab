import React from "react";

import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";

import { theme } from "../../src/styles/theme";

export const testHelper = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
