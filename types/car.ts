export type Car = {
    id: number;
    brand: string;
    model: string;
    price_per_day: number;
    year:number,
    availability: boolean;
    rating: number;
    reviews: number;
    passengers: number;
    transmission: "Automatic" | "Manual";
    air_conditioning: boolean;
    fuel_type:string,
    doors: number;
    image_url: string;
    seats:number,
  };