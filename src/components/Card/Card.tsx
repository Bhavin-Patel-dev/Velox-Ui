import React from "react";

export type CardVariant = "elevated" | "outline" | "filled";

export interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isHoverable?: boolean;
  isPadded?: boolean;
}

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  elevated: {
    backgroundColor: "#ffff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1),0 1px 2px rgba(0, 0, 0,0.6)",
    border: "none",
  },

  outline: {
    backgroundColor: "#ffff",
    boxShadow: "none",
    border: "1px solid #e5e7eb",
  },

  filled: {
    backgroundColor: "#f9fafb",
    boxShadow: "none",
    border: "none",
  },
};

export const Card: React.FC<CardProps> = ({
  variant = "elevated",
  children,
  style,
  onClick,
  isHoverable = false,
  isPadded = true,
}) => {
  const isClickable = Boolean(onClick);

  const cardStyle: React.CSSProperties = {
    borderRadius: "8px",
    padding: isPadded ? "20px" : "0px",
    cursor: isClickable ? "pointer" : "default",
    transition: "box-shadow 0.2 ease, transform 0.2 ease",
    fontFamily: "inherit",
    boxSizing: "border-box",
    ...variantStyles[variant],
    ...(isHoverable && { ":hover": undefined }),
    ...style,
  };

  return (
    <div
      style={cardStyle}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>);
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
};

Card.displayName = "Card";
