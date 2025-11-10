"use client";

import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center space-y-6 p-8 rounded-2xl shadow-md bg-white">
        <SignedOut>
          <div>
            <h1 className="text-2xl font-semibold mb-4">Welcome to My App</h1>
            <SignInButton mode="modal">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Sign In
              </button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div>
            <h1 className="text-2xl font-semibold mb-2">
              Hello, {user?.firstName || "User"} 👋
            </h1>
            <Button asChild variant={"secondary"}>
              <Link href={"/admin"}>Go to Dashboard</Link>
            </Button>
            <p className="text-gray-600 mb-4">You are signed in!</p>
            <SignOutButton>
              <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Sign Out
              </button>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
