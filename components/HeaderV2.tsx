"use client";

import { useState } from "react";
import Link from "next/link";
import { MegaMenu } from "./MegaMenu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Topbar from "./Topbar";
import { menuItems } from "@/data/MenuData";

export function HeaderV2() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="top-0 hidden lg:block sticky z-50 py-2   bg-white shadow-sm">
      <Topbar />
      <div className="container  mx-auto px-4 ">
        <div className="flex h-auto items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://www.coderxpoint.com/static/media/cxpoint_142.047d69ad3394fb2b0e4b413c52ae93b7.svg"
              alt="logo"
              width={100}
              height={100}
              className="object-contain bg-black"
            />
          </Link>

          <nav className="hidden lg:flex ">
            <ul className="flex space-x-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onMouseEnter={() => setActiveMenu(item.id)}
                    onMouseLeave={() => setActiveMenu(null)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors",
                      "hover:bg-red-800 hover:text-white",
                      activeMenu === item.id && "bg-red-800 text-white"
                    )}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {activeMenu && (
        <div
          className="absolute left-0 w-full bg-white z-50 shadow-lg"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <MegaMenu
            content={
              menuItems.find((item) => item.id === activeMenu)?.content || []
            }
            quickLinks={
              menuItems.find((item) => item.id === activeMenu)?.quickLinks || []
            }
            promo={menuItems.find((item) => item.id === activeMenu)?.promo}
          />
        </div>
      )}
    </header>
  );
}
