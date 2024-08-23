import { cn } from "../utils/utils";
import { tv } from "tailwind-variants";

interface InputProps {
  className: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  color?: "red" | "green";
}

const Input: React.FC<InputProps> = ({
  size,
  label,
  color,
  className,

  onChange,
  placeholder,
}) => {
  const style = tv({
    base: ["w-full", "bg-transparent", "border rounded"],
    variants: {
      size: {
        sm: "py-1 px-3 text-sm",
        md: "py-2 px-4 text-md",
        lg: "py-3 px-6 text-lg",
      },
      color: {
        red: "border-red-500",
        green: "border-green-500",
      },
    },
  });
  return (
    <fieldset>
      <legend className="sr-only">{label}</legend>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(className, style({ size, color }))}
        // className={style({ size, color })}}
      />
    </fieldset>
  );
};

export default Input;
