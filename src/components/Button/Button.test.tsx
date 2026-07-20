/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders all variants without crashing", () => {
    const { rerender } = render(<Button variant="primary">Click</Button>);
    expect(screen.getByText("Click")).toBeInTheDocument();

    rerender(<Button variant="secondary">Click</Button>);
    expect(screen.getByText("Click")).toBeInTheDocument();

    rerender(<Button variant="ghost">Click</Button>);
    expect(screen.getByText("Click")).toBeInTheDocument();
  });

  it("renders all sizes without crashing", () => {
    const { rerender } = render(<Button size="sm">Click</Button>);
    expect(screen.getByText("Click")).toBeInTheDocument();

    rerender(<Button size="md">Click</Button>);
    expect(screen.getByText("Click")).toBeInTheDocument();

    rerender(<Button size="lg">Click</Button>);
    expect(screen.getByText("Click")).toBeInTheDocument();
  });

  it("shows loading text when isLoading is true", () => {
    render(<Button isLoading>Click me</Button>);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.queryByText("Click me")).not.toBeInTheDocument();
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("is disabled when isLoading is true", () => {
    render(<Button isLoading>Click me</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Click me
      </Button>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies custom style prop", () => {
    render(<Button style={{ backgroundColor: "red" }}>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle("background-color: rgb(255,0,0)");
  });

  it("forwards ref to the button element", () => {
    const ref = { current: null };
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
