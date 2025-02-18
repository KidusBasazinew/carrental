export type Car = {
  id: number;
  brand: string;
  model: string;
  price_per_day: number;
  availability: boolean;
  rating: number;
  reviews: number;
  passengers: number;
  transmission: "Automatic" | "Manual";
  air_conditioning: boolean;
  doors: number;
  image_url: string;
  year: number;
  fuel_type: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  seats: number;
};
