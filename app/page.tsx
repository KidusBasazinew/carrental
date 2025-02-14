"use client";
import CarCard from "@/components/CarCard";

import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

type Car = {
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
};

const Page = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const fetchData = async () => {
    const res = await fetch("/data/api.json").then((res) => res.json());
    setCars(await res.data.cars);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row gap-y-10 items-center lg:justify-center lg:mt-16">
          <div className="space-y-4 mt-5 ">
            <h1 className="text-5xl text-center font-bold lg:text-start lg:text-6xl">
              <span className="text-primary">Exploar</span> the Finest Global
              offer
            </h1>
            <p className="text-muted-foreground text-center mx-5 lg:mx-0 lg:text-start lg:text-lg lg:w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quo velit ipsum amet. Fugit molestias alias provident
            </p>
            <div className="flex item-center justify-center space-x-4 lg:justify-start">
              <Button>See more</Button>
              <Button variant="secondary">Why us</Button>
            </div>
          </div>
          <div>
            <Image
              src="/images/hero/car.svg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
        <div className="hidden lg:flex justify-between items-center py-20 ">
          <Image src="/icons/brands/audi.svg" width={70} height={70} alt="" />
          <Image src="/icons/brands/ford.svg" width={100} height={100} alt="" />
          <Image src="/icons/brands/bmw.svg" width={70} height={70} alt="" />
          <Image src="/icons/brands/mazda.svg" width={70} height={70} alt="" />
          <Image
            src="/icons/brands/mercedes.svg"
            width={70}
            height={70}
            alt=""
          />
          <Image src="/icons/brands/skoda.svg" width={70} height={70} alt="" />
          <Image src="/icons/brands/vw.svg" width={70} height={70} alt="" />
        </div>
        <div className="grid gap-x-4 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cars.length > 0 ? (
            cars.map((car) => (
              <CarCard
                key={car.id}
                id={car.id}
                brand={car.brand}
                model={car.model}
                year={car.year}
                seats={car.seats}
                price_per_day={car.price_per_day}
                fuel_type={car.fuel_type}
                transmission={car.transmission}
                availability={car.availability}
                image_url={car.image_url}
              />
            ))
          ) : (
            <p>No car available</p>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Page;
