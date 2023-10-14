import { NextResponse } from 'next/server';
import getCurrentUser from '@/actions/getCurrentUser';
import prisma from '@/libs/prismadb';

interface IParams {
  reservationId?: string;
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
}
