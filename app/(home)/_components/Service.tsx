import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <div className="flex flex-col gap-0">
      <div className="grid lg:grid-cols-2 min-h-[600px] md:grid-cols-1">
        {/* Left Image Section */}
        <div className="relative w-full h-full min-h-[400px] md:order-1 order-2">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
            alt="Professional working at desk"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content Section */}
        <div className="relative flex flex-col justify-end bg-[#1a2238] text-white p-8 md:p-12 lg:p-16 md:order-2 order-1">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/careers.avif')" }}
          >
            <div className="absolute inset-0 bg-[#1a2238] opacity-90"></div>
          </div>

          {/* Content Section */}
          <div className="relative space-y-6 z-10">
            <span className="text-[#C4A484] uppercase tracking-wider text-sm font-medium">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Learn Strategy Planning With Us
            </h2>
            <button className="">
              <a href="#" className="a">
                <span className="">View More</span>
              </a>
            </button>
          </div>

          {/* Decorative Star */}
          <div className="absolute bottom-8 right-8 z-10">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Alternative Service */}
      <div className="grid lg:grid-cols-2 min-h-[600px] md:grid-cols-1">
        {/* Right Content Section */}
        <div className="relative flex flex-col justify-end bg-[#1a2238] text-white p-8 md:p-12 lg:p-16 md:order-2 order-1">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/careers.avif')" }}
          >
            <div className="absolute inset-0 bg-[#1a2238] opacity-90"></div>
          </div>

          {/* Content Section */}
          <div className="relative space-y-6 z-10">
            <span className="text-[#C4A484] uppercase tracking-wider text-sm font-medium">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Learn Strategy Planning With Us
            </h2>
            <button>
              <a href="#" className="a">
                <span>View More</span>
              </a>
            </button>
          </div>

          {/* Decorative Star */}
          <div className="absolute bottom-8 right-8 z-10">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-full min-h-[400px] md:order-2 order-1">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
            alt="Professional working at desk"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
