import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; 

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("luzoui");
    const collection = db.collection("luzo");

    const body = await req.json();
    const { categoryName, serviceName, price } = body;

    await collection.insertOne({
      categoryName,
      serviceName,
      price,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Service added successfully" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to add service" }, { status: 500 });
  }
}
