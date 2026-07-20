import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "padding: 4px 10px; font-size: 12px",
  md: "padding: 8px 16px; font-size: 14px",
  lg: "padding: 12px 24px; font-size: 16px",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "background-color: #2563eb; color: #ffffff; border: none;",
  secondary:
    "background-color: transparent; color: #2563eb; border: 2px solid #2563eb;",
  ghost: "background-color: transparent; color: #374151; border: none;",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      disabled,
      style,
      ...rest
    },
    ref,
  ) => {
    const baseStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6px",
      fontWeight: 500,
      cursor: disabled || isLoading ? "not-allowed" : "pointer",
      opacity: disabled || isLoading ? 0.6 : 1,
      transition: "opacity 0.2s ease",
      fontFamily: "inherit",
    };

    const combinedStyle: React.CSSProperties = {
      ...baseStyle,
      ...parseCSSString(sizeStyles[size]),
      ...parseCSSString(variantStyles[variant]),
      ...style,
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        style={combinedStyle}
        {...rest}
      >
        {isLoading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";

function parseCSSString(css: string): React.CSSProperties {
  return css.split(";").reduce((acc, rule) => {
    const [property, value] = rule.split(":").map((s) => s.trim());

    if (property && value) {
      const camelCased = property.replace(/-([a-z])/g, (_, l) =>
        l.toUpperCase(),
      );
      return { ...acc, [camelCased]: value };
    }
    return acc;
  }, {} as React.CSSProperties);
}
