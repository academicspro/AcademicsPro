import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/db';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');

  try {
    if (!id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Exclude the password field
    const { password, ...sanitizedUser } = user; // eslint-disable-line @typescript-eslint/no-unused-vars

    return NextResponse.json(sanitizedUser, { status: 200 });
  } catch (error) {
    console.error('Error fetching user by ID:', error);

    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}
