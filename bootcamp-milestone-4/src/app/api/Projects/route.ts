import { NextResponse } from 'next/server';
import connectDB from '@/app/database/db';
import portfolioSchema from '@/app/database/portfolioSchema';

export async function GET() {
  await connectDB();

  try {
    const projects = await portfolioSchema.find().lean(); 
    return NextResponse.json(projects); 
  } catch (err) {
    console.error("Error fetching projects:", err);
    return NextResponse.json(
      { message: "Error fetching projects" },
      { status: 500 }
    );
  }
}
