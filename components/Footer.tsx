"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Image from "next/image";

import { Instagram, Twitter, Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

type SocialIcon = {
  icon: React.ComponentType<{ className?: string }>;
  alt: string;
  href: string;
};

const socialIcons: SocialIcon[] = [
  {
    icon: Instagram,
    alt: "instagram",
    href: "https://www.instagram.com/coderxpoint/",
  },
  {
    icon: Twitter,
    alt: "twitter",
    href: "https://twitter.com/coderxpoint",
  },
  {
    icon: Github,
    alt: "github",
    href: "https://github.com/coderxpoint",
  },
  {
    icon: Linkedin,
    alt: "linkedin",
    href: "https://www.linkedin.com/company/coderxpoint/",
  },
  {
    icon: Youtube,
    alt: "youtube",
    href: "https://www.youtube.com/coderxpoint",
  },
];

const quickLinks = {
  quickLinks: [
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "/contact" },
    { text: "Case Studies", href: "/case-studies" },
    { text: "Our Clients", href: "/clients" },
  ],
  service: [
    { text: "Maintenance", href: "/maintenance" },
    { text: "Digital", href: "/digital" },
    { text: "Ecommerce", href: "/ecommerce" },
    { text: "SEO", href: "/seo" },
  ],
  product: [
    { text: "Software", href: "/software" },
    { text: "POS Software", href: "/pos-software" },
    { text: "AI", href: "/ai" },
  ],
  policy: [
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Cookie Policy", href: "/cookie-policy" },
    { text: "T&C", href: "/terms-and-conditions" },
  ],
};

export default function Footer() {
  return (
    <div className="bg-black w-full mx-auto px-4 py-8 flex flex-col items-center">
      <div className="container w-full flex flex-col items-center gap-8">
        <div className="flex lg:flex-row flex-col gap-4 w-full justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-bold text-2xl">Newsletter</h1>
            <p className="text-white text-sm">
              Don’t miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
          </div>
          <div className="flex flex-row gap-2 bg-white/90 rounded-md p-2">
            <Input
              placeholder="Enter your email"
              className="w-full shadow-md outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 px-4 py-2 rounded-md bg-white/90 text-black"
            />
            <Button>Sign Up</Button>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-start gap-8 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
            <Image
              src="https://www.coderxpoint.com/static/media/cxpoint_142.047d69ad3394fb2b0e4b413c52ae93b7.svg"
              alt="logo"
              width={500}
              height={500}
              className="mb-4"
            />
            <p className="text-white text-sm ">
              CoderXpoint sprouted from the vision of creating high-quality
              software solutions that address businesses' unique needs.
            </p>
            <div className="flex flex-row justify-center lg:justify-start items-center gap-4 mt-4">
              {socialIcons.map((icon, idx) => (
                <Link key={idx} href={icon.href}>
                  <icon.icon className="w-6 h-6 text-white" />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-8">
            <div className="flex flex-col text-white items-center lg:items-start">
              <h2 className="font-bold text-2xl mb-2">QUICK LINKS</h2>
              {quickLinks.quickLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="mb-1 text-sm hover:underline"
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex flex-col text-white items-center lg:items-start">
              <h2 className="font-bold text-2xl mb-2">SERVICE</h2>
              {quickLinks.service.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="mb-1 text-sm hover:underline"
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex flex-col text-white items-center lg:items-start">
              <h2 className="font-bold text-2xl mb-2">PRODUCT</h2>
              {quickLinks.product.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="mb-1 text-sm hover:underline"
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex flex-col text-white items-center lg:items-start">
              <h2 className="font-bold text-2xl mb-2">POLICY</h2>
              {quickLinks.policy.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="mb-1 text-sm hover:underline"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex lg:flex-row flex-col gap-4 w-full justify-between text-center text-white items-center">
          <p>© 2024 CoderXpoint Technologies & Services Pvt. Ltd.</p>
          <span className="flex gap-4">Terms of Use - Copyright</span>
        </div>
      </div>
    </div>
  );
}
