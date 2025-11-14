"use client";

import { CalendarCheck, Command, Home, LogOut, User } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    id: 1,
    label: "Dashboard",
    link: "dashboard",
    icon: Home,
  },
  {
    id: 2,
    label: "Todos",
    link: "todos",
    icon: CalendarCheck,
  },
  {
    id: 3,
    label: "Account Information",
    link: "account-information",
    icon: User,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} className="border-r bg-[#0D224A] p-0">
      <SidebarHeader className="bg-[#0D224A]">
        <SidebarMenu>
          <SidebarMenuItem className="py-10">
            <SidebarMenuButton
              size="lg"
              className="h-44 hover:bg-transparent hover:text-inherit hover:shadow-none"
              asChild
            >
              <div className="flex flex-col gap-3">
                <Image
                  src={require("@/assets/user-ellipse.png")}
                  alt="user "
                  width={200}
                  height={200}
                  className="w-24 h-24 mx-auto border border-red-500 rounded-full"
                />
                <div className="text-center text-black">
                  <h3 className="text-base font-semibold capitalize">
                    amanuel
                  </h3>
                  <p className="text-sm ">amanuel@gmail.com</p>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-[#0D224A] ">
        <div className="flex flex-col">
          {data?.map((item) => {
            const Icon = item.icon as React.ComponentType<any>;
            return (
              <Link
                href={item.link}
                key={item.id}
                className="flex items-center gap-2 text-base py-4 px-3 bg-green-400 hover:bg-blue-950  text-white"
              >
                <Icon className="size-6" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        {/* <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter className="bg-[#0D224A]">
        {/* <NavUser user={data.user} /> */}
        <div className="flex items-center justify-start gap-4 border">
          <LogOut />
          Logout
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
