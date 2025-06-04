import type React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

import { SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import DashboardSidebarHeader from "@/modules/dashboard/ui/components/dashboard-sidebar-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardSidebarHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
