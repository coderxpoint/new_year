import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

// Define interface for topbar items
interface TopbarItem {
  icon: React.ElementType;
  text: string;
  href?: string;
}

// Topbar items array
const topbarItems: TopbarItem[] = [
  {
    icon: Phone,
    text: "+91 123 456 7890",
    href: "tel:+911234567890",
  },
  {
    icon: Mail,
    text: "contact@example.com",
    href: "mailto:contact@example.com",
  },
  {
    icon: MapPin,
    text: "123 Business Avenue, New Delhi",
    href: "https://maps.google.com/?q=123+Business+Avenue,+New+Delhi",
  },
];

export default function Topbar() {
  return (
    <div className="w-full hidden lg:block  text-black">
      <div className="container mx-auto px-4 mb-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {topbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href || "#"}
              className="flex items-center space-x-2 hover:text-blue-300 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.text}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-sm hover:text-blue-300 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
