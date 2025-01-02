import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BusinessGrid() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-screen">
        {/* Large left panel */}
        <div className="relative col-span-1 md:col-span-2 row-span-2 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
            alt="Office space with chairs and plants"
            className="object-cover w-full h-full"
            width={800}
            height={800}
            priority
          />
        </div>

        {/* Top right panel with person */}
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
            alt="Business professional"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>

        {/* Golden panel with text */}
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
            alt="Business mentorship"
            className="object-cover w-full h-full brightness-[0.7] "
            width={400}
            height={400}
            
          />
          <div className="absolute inset-0 bg-[#C4A484]/60" />
          <div className="absolute inset-0 p-8 flex items-center">
            <div className="space-y-2 text-white">
              <h2 className="text-3xl font-light">
                Start business with mentors
              </h2>
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Navy panel with text */}
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
            alt="Business goals"
            className="object-cover w-full h-full brightness-[0.3]"
            width={400}
            height={400}
          />
          <div className="absolute inset-0 bg-navy-900/60" />
          <div className="absolute inset-0 p-8 flex items-center">
            <div className="space-y-2 text-white">
              <h2 className="text-3xl font-light">
                Achieve goals & coach fast
              </h2>
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Striped panel */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C4A484] via-[#D4B494] to-[#C4A484] bg-[length:10px_100%]" />
        </div>
      </div>
    </div>
  );
}
