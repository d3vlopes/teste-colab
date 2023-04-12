import { it, describe, expect } from "vitest";
import { screen } from "@testing-library/react";

import { testHelper } from "../../helpers";

import { userMockFactory } from "./mock";

import { UserProfile } from ".";

const { getByRole } = screen;

describe("UserProfile", () => {
  it("should render UserProfile", () => {
    testHelper(<UserProfile userInfo={userMockFactory} />);

    const image = getByRole("img", { name: userMockFactory.name });
    const heading = getByRole("heading", { name: userMockFactory.name });
    const subtitle = getByRole("heading", { name: userMockFactory.subtitle });

    expect(image).toHaveAttribute("src", userMockFactory.image);
    expect(image).toHaveAttribute("alt", userMockFactory.name);

    expect(heading).toHaveTextContent(userMockFactory.name);
    expect(heading.tagName.toLocaleLowerCase()).toBe("h1");

    expect(subtitle).toHaveTextContent(userMockFactory.subtitle);
    expect(subtitle.tagName.toLocaleLowerCase()).toBe("h2");
  });

  it("should match snapshot", () => {
    const { container } = testHelper(
      <UserProfile userInfo={userMockFactory} />
    );

    expect(container).toMatchSnapshot();
  });
});
