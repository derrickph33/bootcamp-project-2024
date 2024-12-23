import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import portfolioSchema from "@/app/database/portfolioSchema";
import { Types } from "mongoose";

export async function POST(req: NextRequest) {
  await connectDB();

  let body;
  try {
    body = await req.json();
  } catch (err) {
    console.error("Invalid JSON body:", err);
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const { projectId, user, comment } = body;

  if (!projectId || !Types.ObjectId.isValid(projectId)) {
    console.error("Invalid project ID:", projectId);
    return NextResponse.json({ message: "Invalid project ID" }, { status: 400 });
  }

  if (!user || !comment) {
    console.error("User or comment is missing:", { user, comment });
    return NextResponse.json({ message: "User and comment are required" }, { status: 400 });
  }

  const newComment = {
    id: new Date().getTime().toString(),
    user,
    comment,
    time: new Date(),
  };

  try {
    const updatedProject = await portfolioSchema.findOneAndUpdate(
      { _id: projectId },
      { $push: { comments: newComment } },
      { new: true }
    );

    if (!updatedProject) {
      console.error("Project not found:", projectId);
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    console.log("Comment added successfully:", newComment);
    return NextResponse.json({ message: "Comment added successfully", comment: newComment });
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json({ message: "Error adding comment" }, { status: 500 });
  }
}
