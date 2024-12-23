import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/app/database/db'
import portfolioSchema from '@/app/database/portfolioSchema'

type IParams = {
		params: {
			slug: string
		}
}

export async function GET(req: NextRequest) {
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