import { tv } from "tailwind-variants";
import { cn } from "../utils/utils";

interface InputProps {
  value: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  color?: "red" | "green";
}

const Input: React.FC<InputProps> = ({
  size,
  color,
  className,
  value,
  onChange,
  placeholder,
}) => {
  const style = tv({
    base: "w-full px-4 py-2 border border-gray-300 rounded",
    variants: {
      size: {
        sm: "py-2 px-3 text-sm",
        md: "py-3 px-4 text-md",
        lg: "py-4 px-6 text-lg",
      },
      color: {
        red: "border-red-500",
        green: "border-green-500",
      },
    },
  });
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(className, style({ size, color }))}
      // className={style({ size, color })}}
    />
  );
};

export default Input;
