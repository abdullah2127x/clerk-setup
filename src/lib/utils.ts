import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isAdminClerkId = (clerkId?: string) => {
  const admins = (process.env.NEXT_PUBLIC_ADMIN_CLERK_IDS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return !!clerkId && admins.includes(clerkId);
};
