import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  LocateIcon,
  Computer,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";

// Define interface for topbar items
interface TopbarItem {
  // icon: React.ElementType;
  text: string;
  href?: string;
}

// Topbar items array
const topbarItems: TopbarItem[] = [
  {
    text: "item1",
    href: "/",
  },
  {
    text: "item2",
    href: "/",
  },
  {
    text: "item3",
    href: "/",
  },
  {
    text: "item4",
    href: "/",
  },
  {
    text: "item5",
    href: "/",
  },
];

const reactUs: TopbarItem[] = [
  {
    text: "items1",
    href: "/",
  },
  {
    text: "items2",
    href: "/",
  },
  {
    text: "items3",
    href: "/",
  },
];

export default function Topbar() {
  return (
    <div className="w-full hidden lg:block  text-black">
      <div className="container mx-auto px-4 mb-4 flex justify-between items-center">
        <div className="flex items-center  space-x-2">
          {topbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href || "#"}
              className="flex hover:rounded-md hover:shadow-md px-4 py-2 items-center space-x-2 hover:text-white hover:bg-red-700 text-red-700 transition-colors"
            >
              <span className="text-sm">{item.text}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center  space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <Phone size={24} className="text-red-700" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>your number</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="border-red-700 border">
                  Reach Us
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-2 w-full px-10 items-center text-center justify-center  ">
                  {reactUs.map((item, index) => (
                    <NavigationMenuLink asChild key={index}>
                      <Link href={item.href || "#"}>{item.text}</Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" border-red-700 border">
                  auction
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-2 w-full px-10 items-center text-center justify-center  ">
                  {reactUs.map((item, index) => (
                    <NavigationMenuLink asChild key={index}>
                      <Link href={item.href || "#"}>{item.text}</Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" border-red-700 border">
                  Login
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-2 w-full px-10 items-center text-center justify-center  ">
                  {reactUs.map((item, index) => (
                    <NavigationMenuLink asChild key={index}>
                      <Link href={item.href || "#"}>{item.text}</Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className=" flex flex-row gap-2">
            <Link href="">
              <Search size={24} />
            </Link>
            <Link href="">
              <LocateIcon size={24} />
            </Link>
            <Link href="">
              <Computer size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
