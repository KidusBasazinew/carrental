"use client";
import AboutCarsCard from "@/components/AboutCarsCard";
import CarCard from "@/components/CarCard";

import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

import { WHY_US } from "@/constants/whyus";
import WhyUsCard from "@/components/WhyUsCard";

type Car = {
  id: number;
  brand: string;
  model: string;
  rating: number;
  reviews: number;
  year: number;
  price_per_day: number;
  fuel_type: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  seats: number;
  passengers: number;
  doors: number;
  air_conditioning: boolean;
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
    <section className="relative">
      <div className="flex flex-col lg:flex-row gap-y-10 items-center lg:justify-center lg:mt-16 z-10">
        <div className="space-y-4 mt-5 mx-10 lg:ml-20 py-10 lg:py-0">
          <h1 className="text-5xl text-center font-semibold lg:text-start lg:text-6xl font-poppins">
            Find, book and rent a car{" "}
            <span className="text-primary relative">
              Easily{" "}
              <Image
                src="/icons/Easily_underline.svg"
                width={200}
                height={200}
                alt=""
                className="absolute left-0"
              />
            </span>
          </h1>
          <p className="pt-2 text-sm text-muted-foreground text-center mx-5 lg:mx-0 lg:text-start lg:text-lg lg:w-4/5">
            Get a car wherever and whenever you need it with your IOS and
            Android device.
          </p>
          <div className="flex item-center justify-center space-x-4 lg:justify-start">
            <button className="bg-[#111] px-4 py-3 rounded-md">
              <Image
                src="/icons/buttons/app-store.svg"
                width={100}
                height={50}
                alt="app store app"
              />
            </button>
            <button className="bg-[#111] px-4 py-3 rounded-md">
              <Image
                src="/icons/buttons/google-play.svg"
                width={100}
                height={50}
                alt="google paly app"
              />
            </button>
          </div>
        </div>
        <div className="absolute right-0 hidden lg:block lg:-top-16 z-0">
          <Image
            src="/images/hero/background.png"
            width={430}
            height={430}
            alt=""
            className="z-0"
          />
        </div>
        <div className="z-30">
          <Image
            src="/images/hero/car2@2x.png"
            width={1450}
            height={1450}
            alt=""
          />
        </div>
      </div>
      <MaxWidthWrapper>
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
        <div className="flex flex-col justify-center space-y-4">
          <Button variant="ghost" className="bg-red-100 text-primary mx-auto">
            POPULAR RENTAL DEALS
          </Button>
          <h1 className="text-4xl font-light text-center">
            Most popular cars rental deals
          </h1>
        </div>
        <div className="mt-16 grid gap-x-4 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cars.length > 0 ? (
            cars
              .slice(0, 3)
              .map((car) => (
                <CarCard
                  key={car.id}
                  id={car.id}
                  brand={car.brand}
                  model={car.model}
                  reviews={car.reviews}
                  rating={car.rating}
                  year={car.year}
                  seats={car.seats}
                  price_per_day={car.price_per_day}
                  fuel_type={car.fuel_type}
                  transmission={car.transmission}
                  availability={car.availability}
                  image_url={car.image_url}
                  passengers={car.passengers}
                  doors={car.doors}
                  air_conditioning={car.air_conditioning}
                />
              ))
          ) : (
            <p>No car available</p>
          )}
        </div>
        <div className=" flex flex-col lg:flex-row justify-center items-center gap-12 mx-auto mt-40 max-w-6xl px-6 ">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/about/car01.png"
              width={500}
              height={500}
              alt="about us"
              className="rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col gap-y-8 w-full lg:w-1/2">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Car Services Simplified
              </h1>
              <p className="text-md text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
                perspiciatis earum atque suscipit quia deleniti eos tenetur
                neque, sit et mollitia incidunt vel voluptatum! Sit, cupiditate.
                Quaerat, sed? Numquam?
              </p>
            </div>

            <div className="flex gap-x-10">
              <AboutCarsCard
                icon="/icons/carSlider/gas.svg"
                type="CAR TYPE"
                number={46}
              />
              <AboutCarsCard
                icon="/icons/carSlider/gas.svg"
                type="CAR TYPE"
                number={46}
              />
              <AboutCarsCard
                icon="/icons/carSlider/gas.svg"
                type="CAR TYPE"
                number={46}
              />
            </div>

            <Button
              size="lg"
              className="w-full sm:w-1/2 bg-primary hover:bg-primary-dark text-white"
            >
              See All Cars
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-between items-center mt-20 md:mt-32 lg:mt-40">
        {/* Main car images */}
        <div className="relative w-full md:w-1/2 lg:w-[55%] z-50">
          <Image
            src="/images/why/car03.svg"
            width={600}
            height={600}
            alt="Why us"
            className="hidden md:block w-full h-auto object-contain"
          />
          <Image
            src="/images/why/car02.svg"
            width={600}
            height={600}
            alt="Why us"
            className="block md:hidden w-full h-auto object-contain"
          />
        </div>

        {/* Background pattern */}
        <div className="absolute left-0 -top-16 md:top-10 lg:top-0 w-full max-w-2xl lg:max-w-4xl z-0">
          <Image
            src="/images/why/background.png"
            width={700}
            height={700}
            alt=""
            className="w-2/3  lg:w-4/5  h-auto object-contain z-0"
          />
        </div>

        {/* Content section */}
        <div className="relative z-10 mt-10 w-full md:w-1/2 lg:w-[45%] px-4 sm:px-6 md:px-0">
          <div className="flex flex-col items-start gap-y-4 md:gap-y-6 w-full">
            <Button
              variant="ghost"
              className="bg-red-100 text-primary md:self-start mx-auto md:mx-0"
            >
              WHY CHOOSE US
            </Button>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light py-4 md:py-6">
              We offer the best experience with our rental deals
            </h1>

            <div className="flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10 w-full items-start">
              {WHY_US.map((why, index) => (
                <WhyUsCard
                  key={index}
                  title={why.title}
                  description={why.description}
                  icon={why.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
