import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/app/database/db'
import portfolioSchema from '@/app/database/portfolioSchema'

type IParams = {
		params: {
			slug: string
		}
}

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure

	   try {
	        const blog = await portfolioSchema.findOne({ slug }).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Project not found.', { status: 404 })
	    }
}