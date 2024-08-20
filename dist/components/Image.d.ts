/// <reference types="react" />
interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
    shape?: "default" | "pill" | "rounded" | "square";
    fit?: "contain" | "cover" | "fit";
}
declare const Image: React.FC<ImageProps>;
export default Image;
