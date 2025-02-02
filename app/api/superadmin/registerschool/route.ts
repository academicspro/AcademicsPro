import { NextRequest,NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest) {  

const { name, phone,address,city,state,country,pincode} = await req.json(); 
const school = await prisma.school.create({
  data: {
    name,
    phone,
    address,
    city,
    state,
    country,
    pincode
  }
    
});
console.log(school);
return NextResponse.json({ message: "School registered successfully" }, { status: 200 });

}

// get all schools

export async function GET( ) {
  const schools = await prisma.school.findMany();
  return NextResponse.json(schools, { status: 200, statusText: "Schools fetched successfully" });
}

// update school by ID (PUT route with schoolId)

export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const schoolId = searchParams.get("id");

  if (!schoolId) {
    return NextResponse.json({ message: "School ID is required" }, { status: 400 });
  }

  const { name, phone,address,city,state,country,pincode} = await req.json();

  const school = await prisma.school.update({
    where: {
      id: schoolId,
    },
    data: {
      name,
      phone,
      address,
      city,
      state,
      country,
      pincode
    },
  });

  return NextResponse.json(school, { status: 200, statusText: "School updated successfully" });
}

// delete school by ID (DELETE route with schoolId)

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const schoolId = searchParams.get("id");

  if (!schoolId) {
    return NextResponse.json({ message: "School ID is required" }, { status: 400 });
  }

  const school = await prisma.school.delete({
    where: {
      id: schoolId,
    },
  });

  return NextResponse.json(school, { status: 200, statusText: "School deleted successfully" });
}

