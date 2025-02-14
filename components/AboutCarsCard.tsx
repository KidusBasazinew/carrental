import React from "react";
import Image from "next/image";

interface Props {
  icon: string;
  number: number;
  type: string;
}

const AboutCarsCard = ({ icon, number, type }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <Image
        src={icon}
        width={40}
        height={40}
        alt=""
        className="bg-black p-2"
      />
      <h2 className="font-semibold text-4xl">{number}+</h2>
      <p className="font-light text-sm  text-muted-foreground text-center">
        {type}
      </p>
    </div>
  );
};

export default AboutCarsCard;
