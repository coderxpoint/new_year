import { Badge } from "@/components/ui/badge";
import React from "react";

export default function DailyNews() {
  return (
    <div className="container px-4 w-full mx-auto flex flex-col justify-center items-center ">
      <div className="flex justify-center  items-start w-full flex-col gap-2">
        <div className="lg:w-1/2">
          <Badge className="text-2xl">Daily News</Badge>
          <h1 className="text-4xl font-bold">
            Everything about the business world in one place.
          </h1>
        </div>
      </div>
    </div>
  );
}
