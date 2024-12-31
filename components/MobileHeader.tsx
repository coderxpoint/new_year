import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Menu } from "lucide-react";
import { accountsAndDepositsMenu, cards, cards2 } from "@/data/MenuData";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function MobileHeader() {
  return (
    <div>
      <div className="flex items-center gap-4 lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 w-6 text-white" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] overflow-y-auto"
          >
            <nav className="flex flex-col gap-10">
              <Image
                src="https://www.coderxpoint.com/static/media/cxpoint_142.047d69ad3394fb2b0e4b413c52ae93b7.svg"
                alt="logo"
                width={100}
                height={100}
                className="object-contain bg-black"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="accounts">
                  <AccordionTrigger>Accounts & Deposits</AccordionTrigger>
                  <AccordionContent>
                    {accountsAndDepositsMenu.map((category, idx) => (
                      <div key={idx} className="mb-4">
                        {category.title && (
                          <>
                            <h3 className="font-bold mb-2">{category.title}</h3>
                            <Separator className="my-2" />
                          </>
                        )}
                        <div className="flex flex-col space-y-2">
                          {category.items?.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="text-sm hover:text-blue-500"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cards">
                  <AccordionTrigger>Cards</AccordionTrigger>
                  <AccordionContent>
                    {cards.map((category, idx) => (
                      <div key={idx} className="mb-4">
                        {category.title && (
                          <>
                            <h3 className="font-bold mb-2">{category.title}</h3>
                            <Separator className="my-2" />
                          </>
                        )}
                        <div className="flex flex-col space-y-2">
                          {category.items?.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="text-sm hover:text-blue-500"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cards2">
                  <AccordionTrigger>Cards & Investments</AccordionTrigger>
                  <AccordionContent>
                    {cards2.map((category, idx) => (
                      <div key={idx} className="mb-4">
                        {category.title && (
                          <>
                            <h3 className="font-bold mb-2">{category.title}</h3>
                            <Separator className="my-2" />
                          </>
                        )}
                        <div className="flex flex-col space-y-2">
                          {category.items?.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="text-sm hover:text-blue-500"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </nav>
          </SheetContent>
        </Sheet>
        <Image
          src="https://www.coderxpoint.com/static/media/cxpoint_142.047d69ad3394fb2b0e4b413c52ae93b7.svg"
          alt="logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
}
