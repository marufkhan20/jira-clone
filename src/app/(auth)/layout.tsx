"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  return (
    <main className="bg-neutral-100 min-h-screen ">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" alt="logo" height={56} width={152} />
          <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
            <Button variant="secondary">
              {pathname === "/sign-in" ? "Sign Up" : "Login"}
            </Button>
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
