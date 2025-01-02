"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Slide {
  title: string;
  date: string;
  image: string;
  alt: string;
}

const slides: Slide[] = [
  {
    title: "Introducing innovative ideas for business",
    date: "6. OCT",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920",
    alt: "Business chart",
  },
  {
    title: "Business managment for all future projects",
    date: "6. OCT",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920",
    alt: "Wall Street sign",
  },
  {
    title: "Business expertise in strategy coordination",
    date: "6. OCT",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920",
    alt: "Business meeting",
  },
  {
    title: "Strategic planning and execution",
    date: "6. OCT",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920",
    alt: "Strategic planning",
  },
];

export default function DailyNews() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(slides.length / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentSlides = () => {
    const startIndex = currentPage * 2;
    return slides.slice(startIndex, startIndex + 2);
  };

  return (
    <div className="w-full container mx-auto px-4 ">
      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-16"
      >
        <div className="space-y-4">
          <Badge className="text-4xl font-light space-y-4">Daily News</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 max-w-3xl">
            Everything about the business world in one place.
          </h1>
        </div>
        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Carousel content */}
      <div className="grid lg:grid-cols-2 gap-8">
        <AnimatePresence mode="wait">
          {getCurrentSlides().map((slide, index) => (
            <motion.div
              key={`${currentPage}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex bg-white p-4 flex-col md:flex-row gap-8 items-start md:items-center"
            >
              <div className="space-y-6  flex-1">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-neutral-500"
                >
                  {slide.date}
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-light text-navy-900"
                >
                  {slide.title}
                </motion.h2>
                <Button
                  variant="ghost"
                  className="group"
                >
                  READ MORE
                  <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative aspect-[1/1] w-full lg:w-1/2"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile navigation */}
      <div className="flex md:hidden justify-center gap-2 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentPage === index ? "bg-navy-900" : "bg-gray-300"
            }`}
            initial={false}
            animate={{
              scale: currentPage === index ? 1.2 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
}

