import { Schema, models, model } from "mongoose";

const CarSchema = new Schema(
  {
    carName: { type: String, require: true },
    isAvailable: { type: Boolean, require: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Car = models.Car || model("Car", CarSchema);
