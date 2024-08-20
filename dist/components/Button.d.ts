/// <reference types="react" />
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
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: "base" | "warning" | "primary" | "danger" | "success" | "smooth";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
