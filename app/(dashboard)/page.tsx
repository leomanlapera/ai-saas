import { auth } from "@/lib/auth";
import { DashboardContent } from "@/modules/dashboard/ui/components/dashboard-content";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  return <DashboardContent />;
}
