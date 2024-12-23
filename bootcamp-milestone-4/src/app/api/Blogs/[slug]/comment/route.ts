import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/database/db';
import blogSchema from '@/app/database/blogSchema';

interface Comment {
  user: string;
  comment: string;
  time: Date;
}

export async function POST(req: NextRequest) {
  await connectDB();

  const slug = req.nextUrl.pathname.split('/')[3];

  if (!slug || typeof slug !== 'string') {
    return NextResponse.json({ message: 'Invalid blog slug' }, { status: 400 });
  }

  let body: Partial<Comment>;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  const { user, comment } = body;

  if (!user || typeof user !== 'string') {
    return NextResponse.json({ message: 'User is required and must be a string' }, { status: 400 });
  }

  if (!comment || typeof comment !== 'string') {
    return NextResponse.json({ message: 'Comment is required and must be a string' }, { status: 400 });
  }

  const newComment: Comment = {
    user,
    comment,
    time: new Date(),
  };

  try {
    const updatedBlog = await blogSchema.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    ).orFail();

    return NextResponse.json({ message: 'Comment added successfully', comment: newComment }, { status: 201 });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}