import React from "react";
import "./Spinner.css";

export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerVariant = "primary" | "secondary" | "white";

export interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
  style?: React.CSSProperties;
}

const sizeMap: Record<SpinnerSize, number> = {
  sm: 16,
  md: 24,
  lg: 32,
};

const variantColors: Record<SpinnerVariant, string> = {
  primary: "#2563eb",
  secondary: "#6b7280",
  white: "#ffffff",
};

const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  variant = "primary",
  label = "Loading...",
  style,
}) => {
  const dimension = sizeMap[size];
  const color = variantColors[variant];
  const trackColor =
    color === "#ffffff" ? "rgb(255,255,255,0.15)" : hexToRgba(color, 0.2);

  const spinnerStyles: React.CSSProperties = {
    width: dimension,
    height: dimension,
    borderRadius: "50%",
    borderWidth: "4px",
    borderStyle: "solid",
    borderTopColor: color,
    borderRightColor: trackColor,
    borderBottomColor: trackColor,
    borderLeftColor: trackColor,
    display: "inline-block",
    flexShrink: 0,
    // backgroundColor: "red", - For debugging purpose (temporary debug)
    ...style,
  };

  return (
    <span
      role="status"
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        className="velox-spinner"
        style={spinnerStyles}
        aria-hidden="true"
      />
      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {label}
      </span>
    </span>
  );
};

Spinner.displayName = "Spinner";
