"use client";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Car } from "@/types/car";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const Page = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const fetchData = async () => {
    const res = await fetch("/data/api.json").then((res) => res.json());
    const carsData = await res.data.cars;
    setCars(carsData);
    if (carsData.length > 0) {
      setSelectedCar(carsData[0]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MaxWidthWrapper>
      {/* Header Section */}
      <div className="flex flex-col items-center gap-y-4 mt-10 px-4 text-center">
        <Button variant="ghost" className="bg-red-100 text-primary">
          VEHICLE MODELS
        </Button>
        <h1 className="text-3xl font-semibold">Our Rental Fleets</h1>
        <p className="text-sm text-muted-foreground max-w-md">
          Choose from a variety of our amazing vehicles to rent.
        </p>
      </div>

      {/* Grid Layout for Responsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mt-8 px-4">
        {/* Car Selection Buttons */}
        <div className="flex flex-col gap-1">
          {cars.map((car, index) => (
            <Button
              key={index}
              size="lg"
              variant={selectedCar === car ? "default" : "outline"}
              onClick={() => setSelectedCar(car)}
              className="w-full md:w-auto py-6"
            >
              {car.model}
            </Button>
          ))}
        </div>

        {/* Car Details & Image */}
        {selectedCar ? (
          <>
            <div className="col-span-1 md:col-span-1 lg:col-span-2 flex justify-center">
              <Image
                src={selectedCar.image_url}
                width={500}
                height={500}
                alt={selectedCar.model}
                className="max-w-full h-auto"
              />
            </div>

            {/* Car Info Table */}
            <div className="w-full overflow-x-auto">
              <h2 className="text-2xl font-bold text-center h-14">
                {selectedCar.brand} - {selectedCar.model}
              </h2>
              <Table className="border border-gray-300 rounded-lg mt-5 w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Year</TableCell>
                    <TableCell>{selectedCar.year}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Doors</TableCell>
                    <TableCell>{selectedCar.doors}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Seats</TableCell>
                    <TableCell>{selectedCar.seats}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Passengers</TableCell>
                    <TableCell>{selectedCar.passengers}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Fuel Type</TableCell>
                    <TableCell>{selectedCar.fuel_type}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Transmission</TableCell>
                    <TableCell>{selectedCar.transmission}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Air Conditioning
                    </TableCell>
                    <TableCell>
                      {selectedCar.air_conditioning ? "Yes" : "No"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Price per Day</TableCell>
                    <TableCell>${selectedCar.price_per_day}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Link href={`/cars/${selectedCar.id}`}>
                <Button
                  disabled={!selectedCar.availability}
                  size="lg"
                  className="w-full mt-2"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No car found
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
