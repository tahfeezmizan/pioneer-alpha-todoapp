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
    <Sidebar variant="inset" {...props} className="border-r">
      <SidebarHeader>
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
      <SidebarContent className="">
        <div className="flex flex-col">
          {data?.map((item) => {
            const Icon = item.icon as React.ComponentType<any>;
            return (
              <Link
                href={item.link}
                key={item.id}
                className="flex items-center gap-2 py-2 px-3 rounded-md"
              >
                <Icon className="size-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        {/* <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
        <LogOut />
        Logout
      </SidebarFooter>
    </Sidebar>
  );
}
