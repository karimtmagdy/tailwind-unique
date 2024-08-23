import { cn } from "../utils/utils";
import { tv } from "tailwind-variants";
interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  label?: string | React.ReactElement;
  shape?: "default" | "rounded" | "pill" | "none" | "square";
  half?: "left" | "right";
  fullWidth?: boolean;
  icon?: string | React.ReactElement;
  square?: 1 | 2 | 3;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  color?: "base" | "warning" | "primary" | "danger" | "success" | "smooth";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  label,
  shape,
  size,
  half,
  color,
  fullWidth,
  style,
  square,
  onClick,
  children,
  disabled,
  ...props
}) => {
  const styled = tv({
    base: [
      "outline-none leading-tight font-medium border transition-all duration-100",
      " border-transparent",
      "flex items-center",
      `${square ? "justify-around border-inherent" : "justify-center"}`,
    ],
    variants: {
      fullWidth: { true: "w-full", false: "w-auto" },
      square: {
        1: "size-6",
        2: "size-7",
        3: "size-8",
      },
      half: {
        left: ["rounded-l-none"],
        right: ["rounded-r-none"],
      },
      shape: {
        default: "rounded-md",
        rounded: "rounded-lg",
        pill: "rounded-full",
        none: "rounded-none",
        square: "rounded-xl",
      },
      size: {
        // xs: ["h-8", "text-[12px]", "px-[0.75rem]", "py-[0.5rem]"],
        // sm: ["py-[10px]", "text-[14px]", "px-[1rem]", "h-9"],
        // md: ["h-10", "px-[1.25rem]", "py-[0.75rem]", "text-[16px]"],
        // lg: ["py-[0.875rem]", "px-[1.5rem]", "h-11", "text-[18px]"],
        // xl: ["py-[0.940rem]", "px-[1.75rem]", "h-12", "text-[20px]"],
        //
        xs: ["h-7 px-2 py-1 text-xs"],
        sm: ["h-9 px-3 py-1.5 text-sm"],
        md: ["h-10 px-4 py-2 text-base"],
        lg: ["h-11 px-5 py-2.5 text-lg"],
      },
      color: {
        base: [
          "bg-black dark:bg-white",
          "text-white dark:text-black",
          "hover:bg-black/95 dark:hover:bg-white/90",
          "active:bg-black/80 dark:active:bg-white/80",
        ],
        smooth: ["bg-transparent text-black", "bg-transparent dark:text-white"],
        primary: [
          "bg-primary-500 dark:bg-primary-700",
          "text-white dark:text-white",
          "hover:bg-primary-700/95 dark:hover:bg-primary-800/90",
          "active:bg-primary-800/90 dark:active:bg-primary-800/80",
          "active:text-neutral-400 dark:active:text-neutral-500",
        ],
        warning: [
          "bg-twisted-500 dark:bg-twisted-700",
          "text-white dark:text-white",
          "hover:bg-twisted-700/95 dark:hover:bg-twisted-800/90",
          "active:bg-twisted-800/90 dark:active:bg-twisted-800/80",
          "active:text-neutral-400 dark:active:text-neutral-500",
        ],
        danger: [
          "bg-danger-500 dark:bg-danger-700",
          "text-white dark:text-white",
          "hover:bg-danger-700/95 dark:hover:bg-danger-800/90",
          "active:bg-danger-800/90 dark:active:bg-danger-800/80",
          "active:text-neutral-400 dark:active:text-neutral-500",
        ],
        success: [
          "bg-accent-500 dark:bg-accent-700",
          "text-white dark:text-white",
          "hover:bg-accent-700/95 dark:hover:bg-accent-800/90",
          "active:bg-accent-800/90 dark:active:bg-accent-800/80",
          "active:text-neutral-400 dark:active:text-neutral-500",
        ],
      },
    },
    compoundVariants: [
      {
        shape: ["default", "rounded", "pill", "none", "square"],
        half: ["left", "right"],
        square: [1, 2, 3],
        fullWidth: [true, false],
        size: ["xs", "sm", "md", "lg"],
        color: ["base", "smooth", "primary", "warning", "danger", "success"],

        // className: ["rounded-md"],
        // state: ['default', 'disabled'],
      },
    ],
    defaultVariants: {
      shape: "default",
      ...(size ? {} : { fullWidth: true }),
      ...(square ? {} : { size: "sm", color: "base" }),
    },
  });
  const appliedProps = square
    ? { shape, half }
    : { size, shape, fullWidth, color, half };
  return (
    <button
      className={cn(styled(appliedProps), className)}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...props}
      role="button"
    >
      {icon}
      {label}
      {children}
    </button>
  );
};

export default Button;
// onClick={() => localStorage.clear()}
// "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
