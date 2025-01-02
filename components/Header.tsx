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
            className="fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-50 bg-gray-900 w-full mx-auto py-2 flex lg:flex-col flex-row items-center justify-between">
        <Topbar />
        <MobileHeader />
        <div className="lg:hidden block">shrey</div>
        <div className="lg:flex container hidden px-4 flex-row justify-start gap-10 items-center w-full">
          <Image
            src="https://www.coderxpoint.com/static/media/cxpoint_142.047d69ad3394fb2b0e4b413c52ae93b7.svg"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <nav className="ml-10">
            <NavigationMenu
              onValueChange={(value) => setIsAnyMenuOpen(value !== "")}
            >
              <NavigationMenuList className="flex w-full gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Accounts & Deposits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="relative z-50">
                      <ul className="flex w-[80vw] justify-between flex-row h-full gap-4 p-4 bg-white rounded-lg shadow-lg">
                        {accountsAndDepositsMenu.map((category, catIndex) => (
                          <li key={catIndex} className="flex flex-col">
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
                                className="hover:text-blue-500 mb-1"
                              >
                                {item.label}
                              </Link>
                            ))}
                            {category.imageUrl && (
                              <div className="flex justify-center h-full w-full items-center">
                                <Image
                                  src={category.imageUrl}
                                  alt={category.imageAlt || "image-alt"}
                                  width={100}
                                  height={100}
                                  className="object-contain w-auto mx-auto"
                                />
                              </div>
                            )}
                          </li>
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
                          <li key={index}>
                            <Link
                              href={link.href}
                              className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                            >
                              {link.label}
                              <Separator className="bg-black" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Cards</NavigationMenuTrigger>{" "}
                  <NavigationMenuContent className="bg-gray-100">
                    <ul className="flex w-[80vw] justify-between flex-row h-full gap-4 p-4 bg-white rounded-lg shadow-lg">
                      {cards.map((category, catIndex) => (
                        <li key={catIndex} className="flex flex-col">
                          {category.title && (
                            <>
                              <span className="font-bold mb-2">
                                {category.title}{" "}
                              </span>{" "}
                              <Separator className="my-2" />{" "}
                            </>
                          )}{" "}
                          {category.items &&
                            category.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                href={item.href}
                                className="hover:text-blue-500 mb-1"
                              >
                                {item.label}{" "}
                              </Link>
                            ))}{" "}
                          {category.imageUrl && (
                            <div className="flex justify-center h-full w-full items-center">
                              <Image
                                src={category.imageUrl}
                                alt={category.imageAlt || "image-alt"}
                                width={100}
                                height={100}
                                className="object-contain w-auto mx-auto"
                              />{" "}
                            </div>
                          )}{" "}
                        </li>
                      ))}{" "}
                      <div>
                        <img
                          src="/ads.webp"
                          alt=""
                          className="w-full h-[40vh]"
                        />{" "}
                      </div>{" "}
                    </ul>{" "}
                    <ul className="flex flex-row justify-start items-center gap-2 p-4">
                      <span className="font-semibold text-gray-700">
                        Quick Links:{" "}
                      </span>{" "}
                      {quickLinksCards.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                          >
                            {link.label} <Separator className="bg-black" />{" "}
                          </Link>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </NavigationMenuContent>{" "}
                </NavigationMenuItem>{" "}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>cards22</NavigationMenuTrigger>{" "}
                  <NavigationMenuContent className="bg-gray-100">
                    <ul className="flex w-[80vw] justify-between flex-row h-full gap-4 p-4 bg-white rounded-lg shadow-lg">
                      {cards2.map((category, catIndex) => (
                        <li key={catIndex} className="flex flex-col">
                          {category.title && (
                            <>
                              <span className="font-bold mb-2">
                                {category.title}{" "}
                              </span>{" "}
                              <Separator className="my-2" />{" "}
                            </>
                          )}{" "}
                          {category.items &&
                            category.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                href={item.href}
                                className="hover:text-blue-500 mb-1"
                              >
                                {item.label}{" "}
                              </Link>
                            ))}{" "}
                          {category.imageUrl && (
                            <div className="flex justify-center h-full w-full items-center">
                              <Image
                                src={category.imageUrl}
                                alt={category.imageAlt || "image-alt"}
                                width={100}
                                height={100}
                                className="object-contain w-auto mx-auto"
                              />{" "}
                            </div>
                          )}{" "}
                        </li>
                      ))}{" "}
                      <div>
                        <img
                          src="/ads.webp"
                          alt=""
                          className="w-full h-[40vh]"
                        />{" "}
                      </div>{" "}
                    </ul>{" "}
                    <ul className="flex flex-row justify-start items-center gap-2 p-4">
                      <span className="font-semibold text-gray-700">
                        Quick Links:{" "}
                      </span>{" "}
                      {quickLinksCards2.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                          >
                            {link.label} <Separator className="bg-black" />{" "}
                          </Link>{" "}
                        </li>
                      ))}{" "}
                    </ul>{" "}
                  </NavigationMenuContent>{" "}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </header>
    </>
  );
}
