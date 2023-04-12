import { it, describe, expect, vitest } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";

import { testHelper } from "../../helpers";

import { mockTableFactory } from "./mock";

import { Table } from ".";

const { getByRole, getByTestId } = screen;

describe("Table", () => {
  it("should render with correct structure", () => {
    testHelper(
      <MemoryRouter>
        <Table data={[mockTableFactory[0]]} />
      </MemoryRouter>
    );

    const table = getByRole("table");
    const thead = getByTestId("thead");
    const trID = getByTestId("id");
    const link = getByRole("link");

    const trFirstName = getByTestId("first-name");
    const trLastName = getByTestId("last-name");
    const trTitle = getByTestId("title");
    const trDate = getByTestId("date");
    const trAge = getByTestId("age");
    const trActions = getByTestId("actions");

    const tbody = getByTestId("tbody");

    const valueTdID = getByTestId("value-id");
    const valueTdFirstName = getByTestId("value-first-name");
    const valueTdLastName = getByTestId("value-last-name");
    const valueTdTitle = getByTestId("value-title");
    const valueTdDate = getByTestId("value-date");
    const valueTdAge = getByTestId("value-age");

    expect(table).toBeInTheDocument();
    expect(thead).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "/user/0396a453-cf62-4aa5-b9a2-c85086be7ee2"
    );

    expect(trID).toHaveTextContent("ID");
    expect(trFirstName).toHaveTextContent("First Name");
    expect(trLastName).toHaveTextContent("Last Name");
    expect(trTitle).toHaveTextContent("Title");
    expect(trDate).toHaveTextContent("Date");
    expect(trAge).toHaveTextContent("Age");
    expect(trActions).toBeInTheDocument();

    expect(tbody).toBeInTheDocument();

    expect(valueTdID).toHaveTextContent("0396a453");
    expect(valueTdFirstName).toHaveTextContent("John");
    expect(valueTdLastName).toHaveTextContent("Doe");
    expect(valueTdTitle).toHaveTextContent("Loren ipsum");
    expect(valueTdDate).toHaveTextContent("03/08/1992");
    expect(valueTdAge).toHaveTextContent("30");
  });

  it("should match snapshot", () => {
    const { container } = testHelper(
      <MemoryRouter>
        <Table data={[mockTableFactory[0]]} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
