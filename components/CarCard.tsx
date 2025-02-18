import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  DoorOpen,
  Heart,
  Star,
  UserRound,
  Wind,
  Workflow,
} from "lucide-react";
import { Button } from "./ui/button";

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  rating: number;
  reviews: number;
  price_per_day: number;
  passengers: number;
  doors: number;
  air_conditioning: boolean;
  fuel_type: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  seats: number;
  availability: boolean;
  image_url: string;
}

const CarCard = ({
  brand,
  model,
  rating,
  reviews,
  price_per_day,
  passengers,
  doors,
  transmission,
  air_conditioning,
  availability,
  image_url,
}: Car) => {
  return (
    <div className="space-y-2 bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200">
      {/* Availability & Favorite */}
      <div className="flex justify-between items-center">
        <span
          className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${
            availability ? "bg-primary" : "bg-red-500"
          }`}
        >
          {availability ? <p>Available</p> : <p>Not Available</p>}
        </span>
        <Heart className="text-gray-500 hover:text-red-500 transition duration-200 cursor-pointer" />
      </div>

      {/* Car Image */}
      <div className="relative w-full h-40 flex justify-center">
        <Image
          src={image_url}
          alt={`${brand} ${model}`}
          objectFit="cover"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>

      {/* Car Info */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{brand}</span>
        <div className="flex items-center space-x-1">
          <Star size={16} className="text-yellow-500" fill="yellow" />
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-black">{rating}</span> (
            {reviews} reviews)
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800">{model}</h2>
      <p className="text-lg font-semibold text-primary">
        ${price_per_day}
        <span className="text-sm text-gray-500 font-light"> / day</span>
      </p>

      {/* Car Features */}
      <div className="grid grid-cols-2 gap-y-2 py-3">
        <FeatureItem
          icon={<UserRound size={18} />}
          label={`${passengers} Passengers`}
        />
        <FeatureItem
          icon={<Wind size={18} />}
          label={air_conditioning ? "Air Conditioning" : "No AC"}
        />
        <FeatureItem icon={<Workflow size={18} />} label={transmission} />
        <FeatureItem icon={<DoorOpen size={18} />} label={`${doors} Doors`} />
      </div>

      <hr className="border-gray-300" />

      {/* Extra Features */}
      <div className="flex justify-between items-center py-3">
        <FeatureIcon icon="/icons/carSlider/gas.svg" label="Fuel" />
        <FeatureIcon icon="/icons/carSlider/engine.svg" label="Engine" />
        <FeatureIcon
          icon="/icons/carSlider/gearshift.svg"
          label="Transmission"
        />
        <FeatureIcon icon="/icons/carSlider/wheel.svg" label="Wheels" />
        <FeatureIcon icon="/icons/carSlider/seat.svg" label="Seats" />
      </div>

      {/* Rent Button */}
      <Button
        disabled={!availability}
        size="lg"
        className="w-full py-3 mt-2 text-white flex justify-center items-center gap-2"
      >
        Rent Now <ArrowRight size={18} />
      </Button>
    </div>
  );
};

const FeatureItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center space-x-2 text-gray-600 text-sm">
    {icon}
    <p>{label}</p>
  </div>
);

const FeatureIcon = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex flex-col items-center space-y-1">
    <div className="w-10 h-10 p-2 bg-gray-200 rounded-full flex items-center justify-center">
      <Image src={icon} alt={label} width={20} height={20} />
    </div>
    <span className="text-xs text-gray-500">{label}</span>
  </div>
);

export default CarCard;
