/// <reference types='vitest/globals'/>
/// <reference types='@testing-library/jest-dom/vitest'/>
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge.tsx";

describe("Badge", () => {
  it("render children correctly", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders all variants without crashing", () => {
    const { rerender } = render(<Badge variant="success">Success</Badge>);
    expect(screen.getByText("Success")).toBeInTheDocument();

    rerender(<Badge variant="warning">Warning</Badge>);
    expect(screen.getByText("Warning")).toBeInTheDocument();

    rerender(<Badge variant="error">Error</Badge>);
    expect(screen.getByText("Error")).toBeInTheDocument();

    rerender(<Badge variant="info">Info</Badge>);
    expect(screen.getByText("Info")).toBeInTheDocument();

    rerender(<Badge variant="neutral">Neutral</Badge>);
    expect(screen.getByText("Neutral")).toBeInTheDocument();
  });

  it("render all sizes whithout crashing", () => {
    const { rerender } = render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText("Small")).toBeInTheDocument();

    rerender(<Badge size="md">Medium</Badge>);
    expect(screen.getByText("Medium")).toBeInTheDocument();

    rerender(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large")).toBeInTheDocument();
  });

  it("applies custom style props", () => {
    render(<Badge style={{ background: "purple" }}>Custom</Badge>);
    expect(screen.getByText("Custom")).toHaveStyle("background: purple");
  });

  it("renders as a span element", () => {
    render(<Badge>Tag</Badge>);
    const badge = screen.getByText("Tag");
    expect(badge.tagName).toBe("SPAN");
  });
});
