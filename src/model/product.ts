import { UUID } from "mongodb";
import mongoose from "mongoose";

export interface ProductModel extends Document {
  product_id: string;
  product_category: string;
  product_name: string;
  price: number;
  description: string;
  product_title: string;
}

const productModel = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
    unique: true,
  },
  product_category: { type: String },
  product_name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  product_title: { type: String, required: true, unique: true },
});
// mongoose.models = {}
export const Product =
  mongoose.models.products ||
  mongoose.model<ProductModel>("products", productModel);
