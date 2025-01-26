import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/db';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    // Fetch the user by ID
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        // Exclude sensitive fields like password
      },
    });

    // If user not found, return a 404 error
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Return sanitized user data
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    // Log error in development mode
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching user by ID:', error);
    }

    // Return a 500 Internal Server Error
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}
