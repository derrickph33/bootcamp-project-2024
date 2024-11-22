import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Blog = {
	title: string;
    date: string;
    description: string;
    image: string;      
    imageAlt: string;
    slug: string;
    link: string;
};


// mongoose schema 
const blogSchema = new Schema<Blog>({
	title: { type: String, required: true },
	date: { type: String, required: true },
	description: { type: String, required: true },
	image: { type: String, required: true },
	imageAlt: { type: String, required: true },
    slug: { type: String, required: true },
    link: { type: String, required: true },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blog;