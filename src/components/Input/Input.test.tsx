/// <reference types='vitest/globals' />
/// <reference types='@testing-library/jest-dom/vitest' />
import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renders without crashing", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("render label when provided", () => {
    render(<Input label="Email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("does not render label when not provided", () => {
    render(<Input />);
    expect(screen.queryByRole("label")).not.toBeInTheDocument();
  });

  it("render helper text when provided", () => {
    render(<Input helperText="Enter your email" />);
    expect(screen.getByText("Enter your email")).toBeInTheDocument();
  });

  it("render error text when provided", () => {
    render(<Input errorText="Email is required" />);
    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  it("error text takes priority over helper text", () => {
    render(
      <Input helperText="Enter your email" errorText="Email is required" />,
    );
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.queryByText("Enter your email")).not.toBeInTheDocument();
  });

  it("is disable when disable prop is passed", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("calls onChange when value changes", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("forward ref to input element", () => {
    const ref = { current: null };
    render(<Input ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("label is associated with input via htmlFor", () => {
    render(<Input label="Username" />);
    const label = screen.getByText("Username");
    const input = screen.getByRole("textbox");
    expect(label).toHaveAttribute("for", input.id);
  });
});
