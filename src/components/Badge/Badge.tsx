import React from "react";

export type BadgeVariant = "success" | "warning" | "error" | "info" | "neutral";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const variantStyle: Record<BadgeVariant, React.CSSProperties> = {
  success: { backgroundColor: "#dcfce7", color: "#16a34a" },
  warning: { backgroundColor: "#fef9c3", color: "#ca8a04" },
  error: { backgroundColor: "#fee2e2", color: "#dc2626" },
  info: { backgroundColor: "#dbeafe", color: "#2563eb" },
  neutral: { backgroundColor: "#f3f4f6", color: "#374151" },
};

const sizeStyle: Record<BadgeSize, React.CSSProperties> = {
  sm: { padding: "2px 6px", fontSize: "11px" },
  md: { padding: "4px 8px", fontSize: "12px" },
  lg: { padding: "6px 12px", fontSize: "14px" },
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "neutral",
  size = "md",
  children,
  style,
}) => {
  const badgeStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9999px",
    fontWeight: 500,
    fontFamily: "inherit",
    lineHeight: 1,
    whiteSpace: "nowrap",
    ...sizeStyle[size],
    ...variantStyle[variant],
    ...style,
  };

  return <span style={badgeStyle}>{children}</span>;
};

Badge.displayName = "Badge";
