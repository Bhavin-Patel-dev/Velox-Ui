import React from "react";

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
  white: "#ffff",
};

const KeyframesStyle = `
@Keyframes velox-spin {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}`;

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  variant = "primary",
  label = "Loading...",
  style,
}) => {
  const dimension = sizeMap[size];
  const color = variantColors[variant];

  const spinnerStyles: React.CSSProperties = {
    width: dimension,
    height: dimension,
    borderRadius: "50%",
    border: `2px solid ${color} 20`,
    borderTopColor: color,
    animation: "velox-span 0.7s liner infinite",
    display: "inline-block",
    flexShrink: 0,
    ...style,
  };

  return (
    <>
      <style>{KeyframesStyle}</style>
      <span
        role="status"
        aria-label={label}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={spinnerStyles} aria-hidden="true" />
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
    </>
  );
};

Spinner.displayName = "Spinner";
