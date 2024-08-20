import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

// export function style(...inputs: Parameters<typeof tv>) {
//   return tv(...inputs);
// }
// export function style(...inputs: Parameters<typeof tv>): TVReturnType {
//   return tv(...inputs) as unknown as TVReturnType;
// }
