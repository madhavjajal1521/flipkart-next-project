import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongoose";
import { Product } from "../../../model/product";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextRequest) {
  try {
    const products = await req.json();
    if (!Array.isArray(products)) {
      return new NextResponse("Expected an array of products", { status: 400 });
    }
    await connectMongoDB();
    const productIds = products.map((product) => product.product_id);
    const existingProducts = await Product.find({
      product_id: { $in: productIds },
    });

    console.log("existingProducts:", existingProducts);
    if (existingProducts.length === 0) {
      const existingIds = existingProducts.map((p) => p.product_id);
      const newProducts = products.filter(
        (product) => !existingIds.includes(product.product_id)
      );

      const insertedProducts = await Product.insertMany(newProducts, {
        ordered: false,
      });

      return new NextResponse(
        JSON.stringify({
          message: "Successfully added products",
          products: insertedProducts,
        }),
        { status: 201 }
      );
    } else {
      const existingIds = existingProducts.map((p) => p.product_id);
      return new NextResponse(
        JSON.stringify({
          message: "Error: Duplicate product IDs found",
          existingIds: existingIds,
        }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error adding products:", error);
    return new NextResponse("Error adding products", { status: 500 });
  }
}

// // 4. Get specific user by ID API
// export async function PATCH(req: { query: { id: any; }; }) {
//   console.log('fetchedId:', req.query);
//   const id = req.query.id;
//   const connected = await connectMongoDB();
//     if (connected) {
//       const product = await Product.find((user: { id: any; }) => user.id == id);
//       if (!product) {
//         return new Response("Error: User not found.", { status: 404 });
//       } else {
//         return new NextResponse(
//           JSON.stringify({ status: 200, message: "success", data: product })
//         );
//       }
//     }
// }


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const connected = await connectMongoDB();
    // console.log("connected::", connected);
    if (connected) {
      const products = await Product.find({});
      console.log("products::", products);
      return NextResponse.json(
        JSON.stringify({ status: 200, message: "success" }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      throw Error("Error connecting to MongoDB database.");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
