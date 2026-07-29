import React from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  helperText?: string;
  errorText?: string;
  size?: InputSize;
  isFullWidth?: boolean;
}

const sizeStyles: Record<InputSize, React.CSSProperties> = {
  sm: { padding: "4px 8px", fontSize: "12px" },
  md: { padding: "8px 12px", fontSize: "14px" },
  lg: { padding: "12px 16px", fontSize: "16px" },
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorText,
      size = "md",
      isFullWidth = false,
      disabled,
      style,
      id,
      ...rest
    },
    ref,
  ) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

    const containerStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      width: isFullWidth ? "100%" : "fit-content",
    };

    const labelStyle: React.CSSProperties = {
      fontSize: "14px",
      fontWeight: 500,
      color: "#374151",
      fontFamily: "inherit",
    };

    const inputStyle: React.CSSProperties = {
      ...sizeStyles[size],
      border: `1px solid ${errorText ? "#ef4444" : "#d1d5db"}`,
      borderRadius: "6px",
      outline: "none",
      fontFamily: "inherit",
      color: "#111827",
      backgroundColor: disabled ? "#f3f4f6" : "#ffffff",
      cursor: disabled ? "not-allowed" : "text",
      opacity: disabled ? 0.6 : 1,
      width: isFullWidth ? "100%" : "auto",
      boxSizing: "border-box",
      transition: "border-color 0.2 ease",
      ...style,
    };

    const helperStyle: React.CSSProperties = {
      fontSize: "12px",
      color: errorText ? "#ef4444" : "#6b7280",
      fontFamily: "inherit",
    };

    return (
      <div style={containerStyle}>
        {label && (
          <label htmlFor={inputId} style={labelStyle}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          style={inputStyle}
          {...rest}
        />
        {(helperText || errorText) && (
          <span style={helperStyle}>{errorText || helperText}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
