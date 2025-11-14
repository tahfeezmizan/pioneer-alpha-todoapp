"use client"

import { HardDriveUpload } from "lucide-react";
import Image from "next/image";
import { ProfileForm } from "./profile-form";
import { Button } from "../ui/button";

export default function AccountInfoSection() {
  return (
    <div className="bg-white rounded-xl p-8 space-y-6">
      <div className="">
        <h2 className=" text-2xl font-semibold">Account Information</h2>
        <div className="border w-36 border-blue-500"></div>
      </div>

      {/* profile image upload  */}
      <div className="py-4 px-4 border rounded-2xl flex items-center justify-center gap-10 w-96">
        <Image
          src={require("@/assets/user-ellipse.png")}
          alt="profile image"
          width={200}
          height={200}
          className="w-24 h-24 rounded-full"
        />

        <Button variant={"ghost"} className="bg-blue-500 text-white text-base py-3 rounded-md flex items-center justify-center gap-2">
          <HardDriveUpload className="size-5" /> Upload New Photo
        </Button>
      </div>

      <ProfileForm />
    </div>
  );
}
