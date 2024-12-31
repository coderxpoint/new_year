import React from "react";
import ContactForm from "./_components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ",
  description: "Contact us page",
};

export default function Contact() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
