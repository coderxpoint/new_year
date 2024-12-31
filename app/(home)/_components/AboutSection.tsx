"use client";
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
          <h1 className="lg:text-4xl text-5xl text-white font-extrabold text-center mb-8">
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
            className="text-lg text-gray-400 mb-16 text-center italic"
          >
            Alex Lee, CEO
          </motion.p>
        </motion.div>
      </div>

      <div className=" container h-screen gap-2 flex lg:flex-row flex-col ">
        <div className="w-full h-full ">
          <Link href="/">
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
                alt=""
                className="object-cover object-center h-full w-auto"
              />
            </div>
          </Link>
        </div>
        <div className="w-full h-full ">
          <div className="grid h-full lg:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <Link href="/">
                <div className="relative h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
                    alt=""
                    className="object-cover object-center h-full w-auto"
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link href="/">
                <div className="relative h-full flex flex-col w-full">
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
                    alt=""
                    className="object-cover object-center h-full w-auto"
                  />
                  <p className="relative text-white"> Start business with mentors</p>
                  <h1 className="absolute bottom-0 left-0 right-0 h-full bg-yellow-800 bg-opacity-80 text-white text-center p-4"></h1>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/">
                <div className="relative h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
                    alt=""
                    className="object-cover object-center h-full w-auto"
                  />
                  <h1 className="absolute bottom-0 left-0 right-0 bg-black h-full bg-opacity-50 text-white text-center p-4">
                    Start business with mentors
                  </h1>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/">
                <div className="relative h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
                    alt=""
                    className="object-cover object-center h-full w-auto"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
