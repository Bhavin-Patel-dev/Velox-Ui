/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children correctly", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders all variants without crashing", () => {
    const { rerender } = render(<Card variant="elevated">Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();

    rerender(<Card variant="outline">Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();

    rerender(<Card variant="filled">Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders as a div element", () => {
    render(<Card>Content</Card>);
    const card = screen.getByText("Content");
    expect(card.tagName).toBe("DIV");
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Clickable</Card>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("has role button when onClick is provided", () => {
    render(<Card onClick={() => {}}>Clickable</Card>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("does not have role button when onClick is not provided", () => {
    render(<Card>Static</Card>);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("applies custom style prop", () => {
    render(<Card style={{ backgroundColor: "red" }}>Content</Card>);
    expect(screen.getByText("Content")).toHaveStyle(
      "background-color: rgb(255,0,0)",
    );
  });

  it("triggers onClick on Enter key press", () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Clickable</Card>);
    fireEvent.keyDown(screen.getByRole("button"), { key: "Enter" });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("triggers onClick on Space key press", () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Clickable</Card>);
    fireEvent.keyDown(screen.getByRole("button"), { key: " " });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is not padded when isPadded is false", () => {
    render(<Card isPadded={false}>Content</Card>);
    expect(screen.getByText("Content")).toHaveStyle("padding: 0px");
  });

  it("does not trigger onClick on non Enter or Space Key", () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Clickable</Card>);
    fireEvent.keyDown(screen.getByRole("button"), { key: "Tab" });
    expect(handleClick).not.toHaveBeenCalled();
  });
});
