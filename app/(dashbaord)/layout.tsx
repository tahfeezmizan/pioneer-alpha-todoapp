import { AppSidebar } from "@/components/app-sidebar";
import DashboardTopbar from "@/components/dashboard-topbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="w-full bg-blue-100/60 ">
        <DashboardTopbar />
        <div className="p-10 px-20">{children}</div>
      </main>
    </SidebarProvider>
  );
}
