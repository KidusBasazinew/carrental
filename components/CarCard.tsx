import React from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Button } from "./ui/button";

const CarCard = () => {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-tl-lg bg-green-300">New</div>
        <div className="p-2 rounded-tr-lg bg-red-300">
          <Heart />
        </div>
      </div>
      <Image
        src="/images/carSlider/car01.svg"
        width={300}
        height={300}
        alt=""
      />
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground text-sm">Type</span>
        <div className="flex">
          <Star size={16} fill="red" />
          <Star size={16} fill="red" />
          <Star size={16} fill="red" />
          <Star size={16} fill="red" />
          <Star size={16} fill="red" />
        </div>
      </div>
      <h2 className="text-lg">Name of Car</h2>
      <p className="text-sm text-primary">$25.0/DAY</p>
      <div className="py-2 flex justify-start items-center space-x-4">
        <div className="rounded-full p-3 bg-black">
          <Image src="/icons/carSlider/gas.svg" width={20} height={20} alt="" />
        </div>
        <div className="rounded-full p-3 bg-black">
          <Image
            src="/icons/carSlider/engine.svg"
            width={20}
            height={20}
            alt=""
          />
        </div>
        <div className="rounded-full p-3 bg-black">
          <Image
            src="/icons/carSlider/gearshift.svg"
            width={20}
            height={20}
            alt=""
          />
        </div>
        <div className="rounded-full p-3 bg-black">
          <Image
            src="/icons/carSlider/wheel.svg"
            width={20}
            height={20}
            alt=""
          />
        </div>
        <div className="rounded-full p-3 bg-black">
          <Image
            src="/icons/carSlider/seat.svg"
            width={20}
            height={20}
            alt=""
          />
        </div>
      </div>

      <Button className="w-full !py-4">See Detail</Button>
    </div>
  );
};

export default CarCard;
