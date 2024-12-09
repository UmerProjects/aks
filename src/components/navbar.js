"use client";
import React, { useState } from "react";
import { Menu } from "../components/ui/navbar-menu.js";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-7" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <span className={"pr-4"}>Active</span>

        <span className={"pr-4"}>Collections</span>
        <span className={"pr-4"}>Book Now</span>
      </Menu>
    </div>
  );
}
