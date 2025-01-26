import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/db';

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Exclude the password field
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...sanitizedUser } = user;

    return NextResponse.json(sanitizedUser, { status: 200 });
  } catch (error) {
    console.error('Error fetching user by ID:', error);

    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}

