import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

const HowItWorkCard = ({ title, description, icon: Icon }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 ">
      <Icon size={100} className="bg-red-100 rounded-lg p-6 text-primary" />
      <h1 className="text-xl font-light">{title}</h1>
      <p className="text-sm font-light text-muted-foreground w-4/5 text-center">
        {description}
      </p>
    </div>
  );
};

export default HowItWorkCard;
