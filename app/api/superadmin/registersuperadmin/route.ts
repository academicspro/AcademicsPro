import prisma from "@/db";
import { sendRegistrationEmail } from "@/lib/email";
import bcrypt from "bcrypt";

//  Register Super Admin

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      role,
      password,
      address,
      pincode,
      state,
      country,
      bloodType,
      sex,
      profilePic,
    } = await req.json();

    if (
      !name ||
      !email ||
      !phone ||
      !role ||
      !password ||
      !address ||
      !pincode ||
      !state ||
      !country ||
      !bloodType ||
      !sex
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        role,
        password: hashedPassword,
        address,
        pincode,
        state,
        country,
        bloodType,
        sex: "FEMALE",
        profilePic,
      },
    });

    // Send registration email
    await sendRegistrationEmail(email, password);
    return NextResponse.json(
      { message: "Accounts created successfully", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating Accounts:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// Get all Super Admins

export async function GET() {
    try {
        const superAdmins = await prisma.user.findMany({
        where: { role: "superadmin" },
        });
        return NextResponse.json({ superAdmins }, { status: 200 });
    } catch (error) {
        console.error("Error fetching Super Admins:", error);
        return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
        );
    }
}



// Update Super Admin

export async function PUT(req: NextRequest) {
    try {
        const { id, name, email, phone, address, pincode, state, country, bloodType,sex, profilePic } = await req.json();
    } catch (error) {   


    }
}

// Delete Super Admin
