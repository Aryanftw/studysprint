import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
import connectDB from "../../lib/db.js";
import User from "../../model/User.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    await connectDB();

    // Check if user already exists in DB
    let user = await User.findOne({ clerkId: userId });
    console.log("Fetched from DB:", user);


    // Initialize Clerk client properly with await
    const client = await clerkClient();

    // If user doesn't exist, create a new user in DB
    if (!user) {
      const clerkUser = await client.users.getUser(userId);
      console.log('Clerk User:', clerkUser);  // Inspect the Clerk user data

      // Create a new user document
      user = await User.create({
        clerkId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        fullName: `${clerkUser.firstName} ${clerkUser.lastName}`,
      });
      console.log('Created User:', user);  // Log created user
    }

    return NextResponse.json({ user: user }, { status: 200 });
  } catch (error) {
    console.error("Error creating user:", error);  // Make sure it's `error`, not `err`
    return new NextResponse("Something went wrong", { status: 500 });
  }
  
}
