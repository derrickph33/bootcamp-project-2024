import mongoose, { Schema } from "mongoose";

type IComment = {
    id: string;
    user: string;
    comment: string;
    time: Date;
  };

type Blog = {
	title: string;
    date: string;
    description: string;
    image: string;      
    imageAlt: string;
    slug: string;
    link: string;
    comments: IComment[];
};

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true },
  });

// mongoose schema 
const blogSchema = new Schema<Blog>({
	title: { type: String, required: true },
	date: { type: String, required: true },
	description: { type: String, required: true },
	image: { type: String, required: true },
	imageAlt: { type: String, required: true },
  slug: { type: String, required: true },
  link: { type: String, required: true },
  comments: [commentSchema],
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blog;