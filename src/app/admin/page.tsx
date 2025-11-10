import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { isAdminClerkId } from "@/lib/utils";

export default async function AdminPage() {
  const { userId } = await auth();

  if (!userId || !isAdminClerkId(userId)) {
    return redirect("/");
  }

  return (
    <div className="flex justify-center items-center text-3xl  text-center w-full min-h-screen">
        <p className="max-w-4xl mx-auto">

      Welcome Admin! You can manage your app here. Your authentication user Id
      is included in the NEXT_PUBLIC_ADMIN_CLERK_IDS
        </p>
    </div>
  );
}
