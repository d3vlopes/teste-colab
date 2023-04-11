import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";

interface TableProps {
  title: string;
}

const Table = ({ title }: TableProps) => {
  return <h1>{title}</h1>;
};

const { getByRole } = screen;

describe("Table", () => {
  it("should example", () => {
    render(<Table title="Hello World" />);

    const title = getByRole("heading", { name: "Hello World" });

    expect(title).toBeInTheDocument();
  });
});
