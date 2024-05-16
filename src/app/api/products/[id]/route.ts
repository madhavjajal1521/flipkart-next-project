import { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../../../../libs/mongoose";
import { Product } from "../../../../model/product";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: any) {
  console.log("res:", res);
  const productId = res.params.id;

  try {
    const connected = await connectMongoDB();
    if (connected) {
      const product = await Product.findById(productId);
      if (product) {
        return new NextResponse(
          JSON.stringify({
            status: "success",
            message: `Product with id ${productId} is here`,
            data: product,
          }),
          { status: 200 }
        );
      } else {
        return new NextResponse(
          JSON.stringify({ status: "Failed", message: "Product not found" }),
          { status: 404 }
        );
      }
    } else {
      throw new Error("Error connecting to MongoDB database.");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return new NextResponse(
      JSON.stringify({ status: 500, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}










// Deletes a specific user by ID
export async function DELETE(
  req: NextApiRequest,
  res: { params: { id: string } }
) {
  const userId = parseInt(res.params.id); // Make sure the id is an integer
  console.log("userId", userId);
  const product = await Product.findById( {_id:"6642f51264873791820d16e1"});
  console.log("product", product);
  return false;
  // const userIndex = users.findIndex((user) => user.id === userId);

  // console.log('User index:', userIndex); // Debugging the index

  // if (userIndex !== -1) {
  // users.splice(userIndex, 1); // Remove the user from the users array
  // console.log('Updated users:', users);
  // Write the updated list of users back to the file system

  //   return NextResponse.json({
  //     message: `User with id ${userId} deleted.`
  //   });
  // } else {
  //   // If user is not found, send a 404 response
  //   return new NextResponse("No Such User Found", { status: 404 });
  // }
}

// 4. Get specific user by ID API
export async function PATCH(req: NextApiRequest, res: { params: { id: string | number; }; }) {
  const id : any = res.params.id;
  const connected = await connectMongoDB();
  console.log('fetchedId:', id);
    if (connected) {
      const product = await Product.findOne( {id} );
      console.log('requested product:', product)
      if (!product) {
        return new Response("Error: User not found.", { status: 404 });
      } else {
        return new NextResponse(
          JSON.stringify({ status: 200, message: "success", data: product })
        );
      }
    }
}