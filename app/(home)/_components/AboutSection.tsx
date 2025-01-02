"use client";
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import BusinessGrid from "./BusinessCard";

export default function AboutSection() {
  return (
    <section className="flex px-4 justify-center items-center mx-auto flex-col gap-2 ">
      <div className="container  mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4 items-center"
        >
          <h1 className="lg:text-4xl text-5xl text-white font-extrabold text-center mb-4">
            From <span className="text-blue-500">strategy</span> to{" "}
            <span className="text-green-500">delivery</span>, we are here to
            make sure your business endeavor{" "}
            <span className="text-yellow-500">succeeds</span>. Trust our{" "}
            <span className="text-red-500">experts</span>.
          </h1>
          <Separator className="" />
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-gray-400 mb-5 text-center italic"
          >
            Alex Lee, CEO
          </motion.p>
        </motion.div>
      </div>

      <BusinessGrid />
    </section>
  );
}
