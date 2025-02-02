import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

// Get school by ID (using route parameters)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const schoolId = params.id;

    if (!schoolId) {
        return NextResponse.json({ message: "School ID is required" }, { status: 400 });
    }

    const school = await prisma.school.findUnique({
        where: { id: schoolId },
    });

    if (!school) {
        return NextResponse.json({ message: "School not found" }, { status: 404 });
    }

    return NextResponse.json(school, { status: 200 });
}
