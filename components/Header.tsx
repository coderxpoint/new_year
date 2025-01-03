"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from "framer-motion";

// Assuming these imports exist in your project
import {
  accountsAndDepositsMenu,
  quickLinks,
  cards,
  quickLinksCards,
  cards2,
  quickLinksCards2,
} from "@/data/MenuData";
import MobileHeader from "./MobileHeader";
import Topbar from "./Topbar";

export default function Header() {
  const [isAnyMenuOpen, setIsAnyMenuOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isAnyMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header className="sticky lg:hidden block top-0 z-50 bg-white  w-full mx-auto py-2 flex lg:flex-col flex-row items-center justify-between">
        <Topbar />
        <MobileHeader />
        <div className="lg:flex container hidden px-4 flex-row justify-start gap-10 items-center w-full">
          <Image
            src="https://www.coderxpoint.com/static/media/cxpoint_142.047d69ad3394fb2b0e4b413c52ae93b7.svg"
            alt="logo"
            width={100}
            height={100}
            className="object-contain bg-black"
          />
          <nav className="ml-10 ">
            <NavigationMenu
              onValueChange={(value) => setIsAnyMenuOpen(value !== "")}
            >
              <NavigationMenuList className="flex w-full gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Accounts & Deposits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="relative  z-50">
                      <div className="flex flex-col w-full">
                        <ul className="flex w-[80vw]  justify-between flex-row h-full gap-4 p-4 bg-white rounded-lg shadow-lg">
                          {accountsAndDepositsMenu.map((category, catIndex) => (
                            <div key={catIndex} className="flex gap-12 ">
                              <li className="flex flex-col">
                                {category.title && (
                                  <>
                                    <span className="font-bold mb-2">
                                      {category.title}
                                    </span>
                                    <Separator className="my-2" />
                                  </>
                                )}
                                {category.items?.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    href={item.href}
                                    className="hover:text-red-700 mb-1"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </li>
                              <Separator
                                className=" h-[30vh] items-center"
                                orientation="vertical"
                              />
                            </div>
                          ))}
                          <div>
                            <img
                              src="/ads.webp"
                              alt=""
                              className="w-full h-[40vh]"
                            />
                          </div>
                        </ul>
                        <ul className="flex flex-row justify-start items-center  gap-2 p-4 ">
                          <span className="font-semibold text-gray-700">
                            Quick Links:
                          </span>
                          {quickLinks.map((link, index) => (
                            <li
                              key={index}
                              className="border border-black px-2 rounded-lg items-center justify-center"
                            >
                              <Link
                                href={link.href}
                                className="text-gray-600 hover:text-red-700 text-sm transition-colors"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </header>
    </>
  );
}
