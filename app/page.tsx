import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
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
      </MaxWidthWrapper>
    </section>
  );
};

export default page;
