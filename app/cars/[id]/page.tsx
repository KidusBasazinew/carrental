"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Car } from "@/types/car";
import { Check } from "lucide-react";
import {
  Calendar,
  MapPinCheckInside,
  DollarSign,
  UsersRound,
  Cog,
} from "lucide-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// Helper components
const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// const SpecItem = ({
//   label,
//   value,
// }: {
//   label: string;
//   value: string | number;
// }) => (
//   <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//     <span className="text-gray-600">{label}</span>
//     <span className="font-medium">{value}</span>
//   </div>
// );

const Page = ({ params }: { params: { id: string } }) => {
  const [car, setCar] = useState<Car | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/api.json");
        const jsonData = await response.json();
        const cars: Car[] = jsonData.data.cars;

        const foundCar = cars.find((c) => c.id.toString() === params.id);
        if (foundCar) setCar(foundCar);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);

    if (start && end && start <= end) {
      const diffInTime = end.getTime() - start.getTime();
      const diffInDays = diffInTime / (1000 * 3600 * 24); // Convert time difference to days
      const total = diffInDays * (car?.price_per_day || 0);
      setTotalCost(total);
    }
  };

  if (!car) return <p>Loading...</p>;

  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
      {/* Image Section */}
      <div className="col-span-1 md:col-span-2 w-full h-[calc(100vh*2/3)] overflow-hidden">
        <Image
          src={car.image_url}
          width={1200}
          height={780}
          className="object-cover w-full h-full"
          alt={car.model}
        />
      </div>

      {/* Back Link */}
      <Link href="/cars" className="col-span-1 md:col-span-2 w-full mt-2">
        <span className="ml-2">Back to Cars</span>
      </Link>

      {/* Car Details Section */}
      <div className="p-4">
        {/* Features Section */}
        <div className="bg-[#E9F3F6] rounded-md p-4">
          <h3 className="text-blue-950 font-bold">Car Features</h3>
          <ul className="ml-4">
            {car.air_conditioning && (
              <li className="flex items-center gap-x-2">
                <Check /> Air Conditioning
              </li>
            )}
            <li className="flex items-center gap-x-2">
              <Check /> Transmission: {car.transmission}
            </li>
            <li className="flex items-center gap-x-2">
              <Check /> {car.doors} Doors
            </li>
            <li className="flex items-center gap-x-2">
              <Check /> {car.passengers} Passengers
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div>
            <label
              htmlFor="check_in_date"
              className="block text-sm font-medium text-gray-700"
            >
              Check-In Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => handleDateChange(date, endDate)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              dateFormat="yyyy-MM-dd"
              placeholderText="Select check-in date"
            />
          </div>
          <div>
            <label
              htmlFor="check_out_date"
              className="block text-sm font-medium text-gray-700"
            >
              Check-Out Date
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) =>
                handleDateChange(startDate, date)
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              dateFormat="yyyy-MM-dd"
              placeholderText="Select check-out date"
              minDate={startDate || new Date()}
            />
          </div>
        </div>
        <Button
          size="lg"
          className="w-full mt-10"
          disabled={!startDate || !endDate || !car.availability}
        >
          Rent This Car
        </Button>
      </div>

      {/* Booking Section */}
      <div className="space-y-4 p-4">
        <div className="space-y-6">
          <div className="border-b pb-6">
            <h1 className="text-3xl font-bold mb-2">
              {car.brand} {car.model} ({car.year})
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-semibold">
                ${car.price_per_day}/day
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  car.availability
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {car.availability ? "Available" : "Not Available"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < Math.floor(car.rating)} />
                ))}
              </span>
              <span className="text-gray-600">({car.reviews} reviews)</span>
            </div>
          </div>

          <p className="text-gray-500">Year: {car.year}</p>
          <div className="grid grid-cols-2 gap-y-4 p-4">
            <div className="flex items-center gap-x-2">
              <Calendar />
              <p>Year: {car.year}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <DollarSign />
              <p>Price: ${car.price_per_day}/day</p>
            </div>
            <div className="flex items-center gap-x-2">
              <Cog />
              <p>{car.availability ? "Available" : "Not Available"}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <MapPinCheckInside />
              <p>Fuel: {car.fuel_type}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <UsersRound />
              <p>Seats: {car.seats}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Total Cost */}
      {totalCost > 0 && (
        <div className="mt-4 text-xl font-semibold">
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
