/// <reference types="react" />
interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
    text?: string;
    children?: React.ReactNode;
}
declare const Heading: React.FC<HeadingProps>;
export default Heading;
