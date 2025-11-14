import { SidebarProvider } from "@/components/ui/sidebar";
import Image from "next/image";
import { SignupSection } from "./(auth)/sign-up";

export default function Home() {
  // return <SidebarProvider></SidebarProvider>;
  return (
    <>
      <SignupSection />
    </>
  );
}
