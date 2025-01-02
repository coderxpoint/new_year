"use client";
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export default function AboutSection() {
  return (
    <section className="flex px-4 justify-center items-center mx-auto flex-col gap-2 ">
      <div className="container  mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col h-[80vh] justify-center mx-auto
           gap-4 items-center"
        >
          <h1 className="lg:text-6xl text-5xl text-black font-semibold text-center mb-4">
            From strategy to delivery, we are here to make sure your business
            endeavor succeed. Trust our experts.
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
    </section>
  );
}
