"use client";
import  {  useState,JSX } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { signOut } from "next-auth/react"; 
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { cn } from "../lib/utils";
import Logo from "@/public/logo.png";
import Dashboard from "./Dashboard";

export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();  
  const [open, setOpen] = useState(false);


  const sidebarLinks = {
    superadmin: [
      {
        label: "Dashboard",
        href: "/superadmin",
        icon: <IconBrandTabler className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Register School",
        href: "/superadmin/registerschool",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Register Admin",
        href: "/superadmin/registeradmin",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "User Management",
        href: "/superadmin/users",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Profile",
        href: "/profile",
        icon: <IconArrowLeft className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
    ],
    admin: [
      {
        label: "Dashboard",
        href: "/admin",
        icon: <IconBrandTabler className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Register Student",
        href: "/admin/registerstudent",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Register Parent",
        href: "/admin/registerparent",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Register Teacher",
        href: "/admin/registerteacher",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Register Library",
        href: "/admin/registerlibrary",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Register Accountant",
        href: "/admin/registeraccount",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Register Hostel",
        href: "/admin/registerhostel",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Register Transport",
        href: "/admin/registertransport",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Manage Payment",
        href: "/admin/payment-manage",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Event Calender",
        href: "/admin/event",
        icon: <IconSettings className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      


      {
        label: "Profile",
        href: "/profile",
        icon: <IconArrowLeft className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
    ],
    teacher: [
      {
        label: "Dashboard",
        href: "/teacher",
        icon: <IconBrandTabler className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Profile",
        href: "/profile",
        icon: <IconUserBolt className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Logout",
        href: "#",
        icon: <IconArrowLeft className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
    ],
    student: [
      {
        label: "Dashboard",
        href: "/student",
        icon: <IconBrandTabler className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Profile",
        href: "/profile",
        icon: <IconUserBolt className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Logout",
        href: "#",
        icon: <IconArrowLeft className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
    ],
    parents: [
      {
        label: "Dashboard",
        href: "/parents",
        icon: <IconBrandTabler className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Profile",
        href: "/profile",
        icon: <IconUserBolt className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Logout",
        href: "#",
        icon: <IconArrowLeft className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
    ],
    library: [
      {
        label: "Dashboard",
        href: "/library",
        icon: <IconBrandTabler className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Profile",
        href: "/profile",
        icon: <IconUserBolt className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Logout",
        href: "#",
        icon: <IconArrowLeft className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
    ],
    transport: [
      {
        label: "Dashboard",
        href: "/transport",
        icon: <IconBrandTabler className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Profile",
        href: "/profile",
        icon: <IconUserBolt className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Logout",
        href: "#",
        icon: <IconArrowLeft className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
    ],
    account: [
      {
        label: "Dashboard",
        href: "/account",
        icon: <IconBrandTabler className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Profile",
        href: "/profile",
        icon: <IconUserBolt className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Logout",
        href: "#",
        icon: <IconArrowLeft className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
    ],
    hostel: [
      {
        label: "Dashboard",
        href: "/hostel",
        icon: <IconBrandTabler className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Profile",
        href: "/profile",
        icon: <IconUserBolt className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
      {
        label: "Logout",
        href: "#",
        icon: <IconArrowLeft className="text-primary-foreground h-5 w-5 flex-shrink-0" />
      },
    ],
  };


  if (status === "loading") {
    return <div>Loading...</div>;
  }


  const userRole = session?.user?.role || 'student';

  const links = sidebarLinks[userRole as keyof typeof sidebarLinks];

  return (
    <div className={cn("bg-background text-foreground flex flex-col md:flex-row w-screen h-screen max-w-none mx-0 border border-neutral-200 overflow-hidden")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 h-full bg-background text-foreground">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-background text-foreground">
            {open ? <Logos /> : <Logos />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link: { label: string; href: string; icon: JSX.Element }, idx: React.Key | null | undefined) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-12 text-sm font-semibold text-primary-foreground bg-primary-background hover:bg-primary-foreground hover:text-black rounded-2xl  bg-cyan-900">
            <button
              className="flex items-center justify-center w-full h-12 text-sm font-semibold text-primary-foreground bg-primary-background hover:bg-primary-foreground hover:text-black rounded-2xl  bg-cyan-900 "
              onClick={() => signOut()}>
              {/* <SidebarLink
                link={{
                  label: session?.user?.email || "User",
                  href: "#",
                  icon: (
                    <Image
                      src={"https://via.placeholder.com/50"}
                      className="h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="User Avatar"
                    />
                  ),
                }}

              /> */}
              LogOut
            </button>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard>{children}</Dashboard>
    </div>
  );
}

export const Logos = () => {
  return <Image src={Logo} alt="Company Logo" width={150} />;
};
