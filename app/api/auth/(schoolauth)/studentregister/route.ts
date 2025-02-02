// import prisma from "@/db";
// import { randomBytes } from "crypto";
// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import { sendRegistrationEmail } from "@/lib/email";
// import { uploadFile } from "@/lib/upload";

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
//     const name = formData.get("name") as string;
//     const email = formData.get("email") as string;
//     const phone = formData.get("phone") as string;
//     const address = formData.get("address") as string;
//     const city = formData.get("city") as string;
//     const state = formData.get("state") as string;
//     const country = formData.get("country") as string;
//     const pincode = formData.get("pincode") as string;
//     const schoolId = formData.get("schoolId") as string;
//     const profilePicFile = formData.get("profilePic") as File | null;

//     // Validate required fields
//     if (
//       !name ||
//       !email ||
//       !phone ||
//       !address ||
//       !city ||
//       !state ||
//       !country ||
//       !pincode ||
//       !schoolId ||
//       !profilePicFile
//     ) {
//       return NextResponse.json(
//         { error: "All fields are required." },
//         { status: 400 }
//       );
//     }


//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const { publicId, url } = await uploadFile(profilePicFile, "profile_pics");

//     const tempPassword = randomBytes(8).toString("hex");
//     const hashedPassword = await bcrypt.hash(tempPassword, 10);

  
//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         phone,
//         address,
//         city,
//         state,
//         country,
//         pincode,
//         sex:"FEMALE",
//         bloodType: "O+",
//         profilePic: url, 
//         password: hashedPassword,
//         role: "student",
//         school: {
//           connect: { id: schoolId },
//         },
//       },
//     });

//     // Send registration email 
//     await sendRegistrationEmail(email, tempPassword);

//     // Create teacher 
//     const student = await prisma.student.create({
//       data: {
//         user: {
//           connect: { id: user.id },
//         },
//         school: {
//           connect: { id: schoolId },
//         },
//       },
//     });

//     return NextResponse.json(
//       { message: "Student created successfully", student },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error creating Student:", error);
//     return NextResponse.json(
//       { error: "Something went wrong. Please try again." },
//       { status: 500 }
//     );
//   }
// }
