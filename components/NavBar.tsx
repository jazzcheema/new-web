"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/NavbarMenu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/start" className="text-black">Home</Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="YouWish"
              href="#"
              src="/you-wish-genie.png"
              description="Make 3 wishes to a Youtube API before getting blocked. **This action will stop current audio & redirect"
            />
            <ProductItem
              title="Sonnet #18"
              href="/shakespeare"
              src="/shakespeare.png"
              description="Shakespeare's Sonnet #18"
            />

          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Info">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About</HoveredLink>
            <HoveredLink href="/contact">Contact</HoveredLink>
            <HoveredLink href="https://www.tevacheema.com/">Film</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
