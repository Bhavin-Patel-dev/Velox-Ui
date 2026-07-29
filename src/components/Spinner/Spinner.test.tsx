/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders without crashing", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has default aria-label of Loading...", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toHaveAttribute(
      "aria-label",
      "Loading...",
    );
  });

  it("accepts custom label", () => {
    render(<Spinner label="Fetching data..." />);
    expect(screen.getByRole("status")).toHaveAttribute(
      "aria-label",
      "Fetching data...",
    );
  });

  it("renders all sizes without crashing", () => {
    const { rerender } = render(<Spinner size="sm" />);
    expect(screen.getByRole("status")).toBeInTheDocument();

    rerender(<Spinner size="md" />);
    expect(screen.getByRole("status")).toBeInTheDocument();

    rerender(<Spinner size="lg" />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders all variants without crashing", () => {
    const { rerender } = render(<Spinner variant="primary" />);
    expect(screen.getByRole("status")).toBeInTheDocument();

    rerender(<Spinner variant="secondary" />);
    expect(screen.getByRole("status")).toBeInTheDocument();

    rerender(<Spinner variant="white" />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("visual span is hidden from screen readers", () => {
    render(<Spinner />);
    const hiddenSpan = document.querySelector('[aria-hidden="true"]');
    expect(hiddenSpan).toBeInTheDocument();
  });

  it("applies custom style prop", () => {
    render(<Spinner style={{ opacity: 0.5 }} />);
    const hiddenSpan = document.querySelector('[aria-hidden="true"]');
    expect(hiddenSpan).toHaveStyle("opacity: 0.5");
  });

  it("renders with no style props without crashing", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
