"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSidebarHeader() {
  const { isPending, data } = authClient.useSession();

  if (isPending) {
    return (
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="ml-auto flex items-center space-x-4">
          <Skeleton className="h-5 w-64" />
        </div>
      </header>
    );
  }

  if (!data?.user) {
    return null;
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <div className="ml-auto flex items-center space-x-4">
        <span className="text-sm text-muted-foreground">
          Welcome back, {data.user.name}!
        </span>
      </div>
    </header>
  );
}
