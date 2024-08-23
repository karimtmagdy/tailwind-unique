import React from "react";
import { cn } from "../utils/utils";
import { tv } from "tailwind-variants";
interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  label?: string;
  children?: React.ReactNode;
}
const Heading: React.FC<HeadingProps> = ({
  level,
  className,
  children,
  label,
}) => {
  const styled = tv({
    base: "font-bold leading-tight",
    variants: {
      level: {
        1: "text-4xl",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
        6: "text-base",
      },
    },
    compoundVariants: [
      {
        level: [1, 2, 3, 4, 5, 6],
      },
    ],
    defaultVariants: {
      level: 1,
    },
  });

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return React.createElement(
    Tag,
    { className: cn(styled({ level }), className) },
    <>
      {label}
      {children}
    </>
  );
};

export default Heading;
