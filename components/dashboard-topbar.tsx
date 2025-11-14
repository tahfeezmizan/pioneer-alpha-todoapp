"use client";

import Image from "next/image";
import { SidebarTrigger } from "./ui/sidebar";
import { Bell, CalendarDays } from "lucide-react";

export default function DashboardTopbar() {
  return (
    <div className="flex items-center justify-between gap-16 px-2 md:px-12 bg-white py-4 md:py-6 border-b w-full">
      <div className="flex-1 flex items-center gap-2 justify-start">
        <SidebarTrigger className="lg:hidden size-7" />
        <Image
          src={require("@/assets/logo.png")}
          alt="dashboard logo"
          width={200}
          height={200}
          className="w-32 md:w-36 h-auto"
        />
      </div>
      <div className="flex-1 flex items-center justify-end gap-5">
        <div className="w-11 h-11 text-white rounded-lg flex items-center justify-center bg-[#5272FF]">
          <Bell className=" " />
        </div>
        <div className="w-11 h-11 text-white rounded-lg flex items-center justify-center bg-[#5272FF]">
          <CalendarDays />
        </div>
        <div className="">
          <h3>Firday</h3>
          <p className="">07/11/2025</p>
        </div>
      </div>
    </div>
  );
}
