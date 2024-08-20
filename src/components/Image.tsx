import { cn } from "../utils/utils";
 import { tv } from "tailwind-variants";
interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  shape?: "default" | "pill" | "rounded" | "square";
  fit?: "contain" | "cover" | "fit";
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  size,
  shape,
  fit,
}) => {
  const   styled=tv({
    base: "w-full h-full object-cover",
    variants: {
      size: {
        xs: "w-8 h-8",
        sm: "w-10 h-10",
        md: "w-16 h-16",
        lg: "w-32 h-32",
        xl: "w-64 h-64",
        full: "w-full h-full",
      },
      shape: {
        default: "rounded-md",
        pill: "rounded-full",
        rounded: "rounded-lg",
        square: "rounded-xl",
      },
      fit: {
        contain: "object-contain",
        cover: "object-cover",
        // fill:"object-fill",
        fit: "object-fit",
      },
    },
    compoundVariants: [
      {
        size: ["xs", "sm", "md", "lg", "xl", "full"],
        shape: ["default", "pill", "rounded", "square"],
        fit: ["contain", "cover", "fit"],
      },
    ],
    defaultVariants: {
      size: "md",
      shape: "default",
      fit: "contain",
    },
  });
  return (
    <img
      src={src}
      alt={alt}
      className={cn(styled({ size, shape, fit }), className)}
    />
  );
};
// imageStyle({ size, shape, fit }), className)
export default Image;
