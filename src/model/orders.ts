import mongoose from "mongoose";

const orderModel = new mongoose.Schema(
  {
    order_id: { type: Number, required: true },
    order_category: { type: String },
    order_name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    order_title: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
export const Order =
  mongoose.models.products || mongoose.model("orders", orderModel);
