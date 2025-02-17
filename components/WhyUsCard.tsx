import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

const WhyUsCard = ({ title, description, icon: Icon }: Props) => {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <Icon size="50" className="p-3 text-red-600 bg-red-200 rounded-lg" />

      <div className="max-w-sm flex flex-col gap-y-1">
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-sm font-light text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
