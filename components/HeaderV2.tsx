"use client";

import { useState } from "react";
import Link from "next/link";
import { MegaMenu } from "./MegaMenu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Topbar from "./Topbar";

export function HeaderV2() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Accounts & Deposits",
      href: "#",
      id: "accounts",
      content: [
        {
          title: "Accounts",
          items: [
            { title: "Savings Account", href: "#", badge: "Up to 7% p.a." },
            { title: "Zero Balance Savings Account", href: "#" },
            { title: "Corporate Salary Account", href: "#" },
            { title: "Uniformed Personnel Account", href: "#" },
            { title: "Current Account", href: "#" },
          ],
        },
        {
          title: "Deposits",
          items: [
            { title: "Fixed Deposit", href: "#", badge: "Up to 7.99% p.a." },
            { title: "Recurring Deposit", href: "#" },
            {
              title: "Senior Citizen FD",
              href: "#",
              badge: "Up to 8.49% p.a.",
            },
            { title: "Auto Sweep FD", href: "#" },
          ],
        },
        {
          title: "Locker",
          items: [{ title: "Safe Deposit Locker", href: "#" }],
        },
      ],
      quickLinks: [
        { title: "Interest Rate", href: "#" },
        { title: "FD Calculator", href: "#" },
        { title: "FD Interest Rates", href: "#" },
        { title: "Open a Savings Account", href: "#" },
        { title: "Open a Fixed Deposit", href: "#" },
        { title: "CASA Welcome Kit", href: "#" },
        { title: "FAQs", href: "#" },
      ],
      promo: {
        title: "Save Today, Enjoy More Tomorrow",
        description: "Earn high interest up to 7% p.a. on savings",
        cta: "Open a Savings Account",
        image: "/placeholder.svg?height=400&width=300",
      },
    },
    {
      title: "Cards",
      href: "#",
      id: "cards",
      content: [
        {
          title: "Credit Cards",
          items: [
            { title: "Platinum Credit Card", href: "#" },
            { title: "Rewards Credit Card", href: "#" },
            { title: "Travel Credit Card", href: "#" },
          ],
        },
        {
          title: "Debit Cards",
          items: [
            { title: "Classic Debit Card", href: "#" },
            { title: "Platinum Debit Card", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Compare Cards", href: "#" },
        { title: "Apply for Credit Card", href: "#" },
        { title: "Card Offers", href: "#" },
        { title: "Card Security", href: "#" },
      ],
      promo: {
        title: "Unlock Premium Benefits",
        description: "Get 5% cashback on all your purchases",
        cta: "Apply for Platinum Card",
        image: "/placeholder.svg?height=400&width=300",
      },
    },
    {
      title: "Loans",
      href: "#",
      id: "loans",
      content: [
        {
          title: "Personal Loans",
          items: [
            { title: "Instant Personal Loan", href: "#" },
            { title: "Salary Advance", href: "#" },
          ],
        },
        {
          title: "Home Loans",
          items: [
            { title: "New Home Loan", href: "#" },
            { title: "Home Loan Transfer", href: "#" },
          ],
        },
        {
          title: "Vehicle Loans",
          items: [
            { title: "Car Loan", href: "#" },
            { title: "Two-Wheeler Loan", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Loan Eligibility", href: "#" },
        { title: "EMI Calculator", href: "#" },
        { title: "Apply for Loan", href: "#" },
        { title: "Loan Interest Rates", href: "#" },
      ],
      promo: {
        title: "Your Dream Home Awaits",
        description: "Get home loans at attractive interest rates",
        cta: "Apply for Home Loan",
        image: "/placeholder.svg?height=400&width=300",
      },
    },
    {
      title: "Apply Online",
      href: "#",
      id: "apply",
      content: [
        {
          title: "Quick Apply",
          items: [
            { title: "Open Savings Account", href: "#" },
            { title: "Apply for Credit Card", href: "#" },
            { title: "Apply for Personal Loan", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Track Application", href: "#" },
        { title: "Required Documents", href: "#" },
        { title: "Application Guide", href: "#" },
      ],
      promo: {
        title: "Fast and Easy Applications",
        description: "Get approved in minutes",
        cta: "Start Your Application",
        image: "/placeholder.svg?height=400&width=300",
      },
    },
    {
      title: "Digital Banking",
      href: "#",
      id: "digital",
      content: [
        {
          title: "Online Services",
          items: [
            { title: "Internet Banking", href: "#" },
            { title: "Mobile Banking App", href: "#" },
            { title: "UPI Payments", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Register for Net Banking", href: "#" },
        { title: "Download Mobile App", href: "#" },
        { title: "Digital Security Tips", href: "#" },
      ],
      promo: {
        title: "Bank Anytime, Anywhere",
        description: "Experience seamless digital banking",
        cta: "Get Started",
        image: "/placeholder.svg?height=400&width=300",
      },
    },
    {
      title: "% Rates & Offers",
      href: "#",
      id: "rates",
      content: [
        {
          title: "Current Rates",
          items: [
            { title: "Savings Account Rates", href: "#" },
            { title: "Fixed Deposit Rates", href: "#" },
            { title: "Loan Interest Rates", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Compare Rates", href: "#" },
        { title: "Special Offers", href: "#" },
        { title: "Forex Rates", href: "#" },
      ],
      promo: {
        title: "Best-in-class Interest Rates",
        description: "Maximize your savings with our competitive rates",
        cta: "View All Rates",
        image: "/placeholder.svg?height=400&width=300",
      },
    },
    {
      title: "Investments & Insurance",
      href: "#",
      id: "investments",
      content: [
        {
          title: "Investments",
          items: [
            { title: "Mutual Funds", href: "#" },
            { title: "Stocks & Securities", href: "#" },
          ],
        },
        {
          title: "Insurance",
          items: [
            { title: "Life Insurance", href: "#" },
            { title: "Health Insurance", href: "#" },
            { title: "Car Insurance", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Investment Calculator", href: "#" },
        { title: "Compare Insurance Plans", href: "#" },
        { title: "Portfolio Management", href: "#" },
      ],
      promo: {
        title: "Secure Your Future",
        description: "Explore our range of investment and insurance products",
        cta: "Start Investing",
        image: "/placeholder.svg?height=400&width=300",
      },
    },
  ];

  return (
    <header className="relative hidden lg:block z-50 py-2  bg-white shadow-sm">
      <Topbar />
      <div className="container mx-auto px-4">
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

          <nav className="hidden lg:flex">
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
