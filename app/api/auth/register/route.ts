import { NextRequest } from "next/server";
import prisma from "@/db";
import bcrypt from "bcrypt";
import { sendRegistrationEmail } from "@/lib/email";
import { randomBytes } from "crypto";
import { NextResponse } from "next/server"; 

export async function POST(req: NextRequest) {
  try {

    const requestBody = await req.json();
    console.log("Request body received:", requestBody);

    if (!requestBody) {
      console.error("Request body is empty.");
      return NextResponse.json({ message: "Request body is empty" }, { status: 400 });
    }

    const { name, phone, email, role, createdBy, schoolId , city, state,country,pincode,bloodType,sex } = requestBody;
    console.log("Parsed data:", { name, phone, email, role, createdBy, schoolId });


    if (!name || !phone || !email || !role || !createdBy || !schoolId || !city || !state || !country || !state || !pincode || !bloodType || !sex) {
      console.error("Missing required fields.");
      return NextResponse.json({ message: "All fields (name, phone, email, role, createdBy, schoolId, city,state,country,pincode,sex,bloodType) are required" }, { status: 400 });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }


    const creator = await prisma.user.findUnique({ where: { email: createdBy } });
    console.log("Creator found:", creator);

    if (!creator) {
      console.error("Creator not found:", createdBy);
      return NextResponse.json({ message: "Creator not found" }, { status: 404 });
    }

  
    if (role === "admin" && creator.role !== "superadmin") {
      console.error("Unauthorized attempt to register admin by:", creator.email);
      return NextResponse.json({ message: "Only Super Admin can register Admins" }, { status: 403 });
    }


    if (
      role !== "admin" &&
      role !== "superadmin" &&
      creator.role !== "admin" &&
      creator.role !== "superadmin"
    ) {
      console.error("Unauthorized role registration attempt by:", creator.email);
      return NextResponse.json({ message: "You are not authorized to register this role" }, { status: 403 });
    }


    const school = await prisma.school.findUnique({ where: { id: schoolId } });
    console.log("School found:", school);

    if (!school) {
      console.error("School not found for ID:", schoolId);
      return NextResponse.json({ message: "School not found" }, { status: 404 });
    }

    const tempPassword = randomBytes(8).toString("hex");
    const hashedPassword = await bcrypt.hash(tempPassword, 10);
    console.log("Temporary password generated and hashed:", tempPassword);


    console.log("Attempting to register user:", email);
    const user = await prisma.user.create({
      data: {
        name,
        phone,
        email, 
        city,
        state,
        country,
        pincode,
        bloodType,
        sex:"FEMALE",
        password: hashedPassword,
        role,
        school: {
          connect: { id: schoolId },
        },
      },
    });

    if (!user) {
      console.error("Failed to create user in the database:", email);
      return NextResponse.json({ message: "Failed to create user" }, { status: 500 });
    }

    console.log("User created successfully:", user);

  
    console.log("Sending registration email to:", email);
    await sendRegistrationEmail(email, tempPassword);

    return NextResponse.json({ message: "User registered successfully", user }, { status: 201 });
  } catch (error) {

    console.error("An error occurred:", error);
    if (error instanceof Error) {
      console.error(error.stack); 
    }
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
