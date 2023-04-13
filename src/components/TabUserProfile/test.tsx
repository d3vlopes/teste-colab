import { it, describe, expect } from "vitest";
import { fireEvent, screen } from "@testing-library/react";

import { TabUserProfile } from ".";

import { tabUserMockFactory } from "./mock";

import { testHelper } from "../../helpers";

const { getByRole } = screen;

describe("TabUserProfile", () => {
  it("should render by default", () => {
    const { container } = testHelper(
      <TabUserProfile {...tabUserMockFactory} />
    );

    const infoButton = getByRole("tab", { name: "Info" });
    const locationButton = getByRole("tab", { name: "Location" });
    const loginButton = getByRole("tab", { name: "Login" });

    const infoContent = container.querySelector("#panel-info");
    const locationContent = container.querySelector("#panel-location");
    const loginContent = container.querySelector("#panel-login");

    expect(infoButton).toBeInTheDocument();
    expect(locationButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    expect(infoContent?.getAttribute("aria-hidden")).toBe("false");
    expect(locationContent?.getAttribute("aria-hidden")).toBe("true");
    expect(loginContent?.getAttribute("aria-hidden")).toBe("true");
  });

  it("should change active tab on click", () => {
    const { container } = testHelper(
      <TabUserProfile {...tabUserMockFactory} />
    );

    const locationButton = getByRole("tab", { name: "Location" });

    const infoContent = container.querySelector("#panel-info");
    const locationContent = container.querySelector("#panel-location");
    const loginContent = container.querySelector("#panel-login");

    expect(infoContent?.getAttribute("aria-hidden")).toBe("false");
    expect(locationContent?.getAttribute("aria-hidden")).toBe("true");
    expect(loginContent?.getAttribute("aria-hidden")).toBe("true");

    expect(infoContent).toHaveStyle({
      display: "flex",
    });
    expect(locationContent).toHaveStyle({
      display: "none",
    });
    expect(loginContent).toHaveStyle({
      display: "none",
    });

    fireEvent.click(locationButton);

    expect(infoContent?.getAttribute("aria-hidden")).toBe("true");
    expect(locationContent?.getAttribute("aria-hidden")).toBe("false");
    expect(loginContent?.getAttribute("aria-hidden")).toBe("true");

    expect(infoContent).toHaveStyle({
      display: "none",
    });
    expect(locationContent).toHaveStyle({
      display: "flex",
    });
    expect(loginContent).toHaveStyle({
      display: "none",
    });
  });
});
