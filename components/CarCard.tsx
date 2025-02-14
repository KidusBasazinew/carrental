import React from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Button } from "./ui/button";

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price_per_day: number;
  fuel_type: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  seats: number;
  availability: boolean;
  image_url: string;
}

const CarCard = ({
  // id,
  brand,
  model,
  // year,
  price_per_day,
  // fuel_type,
  // transmission,
  availability,
  image_url,
}: Car) => {
  return (
    <div className="space-y-1 bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Availability Badge */}
      <div className="flex justify-between">
        <div
          className={`px-3 py-1 flex items-center text-white rounded-full ${
            availability ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <p>{availability ? "Available" : "Not Available"}</p>
        </div>
        <div className="p-2">
          <Heart className="text-gray-600 hover:text-red-500 transition-colors duration-200" />
        </div>
      </div>

      {/* Car Image */}
      <div className="relative w-full h-64">
        <Image
          src={image_url}
          alt={`${brand} ${model}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Car Details */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{brand}</span>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="yellow"
              className="text-yellow-500"
            />
          ))}
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800">{model}</h2>
      <p className="text-lg font-semibold text-primary">${price_per_day}/DAY</p>

      {/* Features Section */}
      <div className="flex space-x-3 py-2">
        <FeatureIcon icon="/icons/carSlider/gas.svg" label="Fuel" />
        <FeatureIcon icon="/icons/carSlider/engine.svg" label="Engine" />
        <FeatureIcon
          icon="/icons/carSlider/gearshift.svg"
          label="Transmission"
        />
        <FeatureIcon icon="/icons/carSlider/wheel.svg" label="Wheels" />
        <FeatureIcon icon="/icons/carSlider/seat.svg" label="Seats" />
      </div>

      {/* Button */}
      <Button className="w-full py-3 mt-4 bg-primary hover:bg-primary-dark text-white">
        See Detail
      </Button>
    </div>
  );
};

const FeatureIcon = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className="w-10 h-10 p-2 bg-black rounded-full flex items-center justify-center">
      <Image src={icon} alt={label} width={20} height={20} />
    </div>
    <span className="text-xs text-gray-500">{label}</span>
  </div>
);

export default CarCard;
