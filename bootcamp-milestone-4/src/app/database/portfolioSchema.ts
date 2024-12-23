import mongoose, { Schema } from "mongoose";

type IComment = {
  id: string;
  user: string;
  comment: string;
  time: Date;
};

// typescript type (can also be an interface)
type Project = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string; 
  comments: IComment[];
};

const commentSchema = new Schema<IComment>({
  id: { type: String, required: true },
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true, default: Date.now },
});

// mongoose schema
const portfolioSchema = new Schema<Project>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  link: { type: String, required: false }, 
  comments: { type: [commentSchema], default: [] },
});

// defining the collection and model
const Project = mongoose.models['projects'] ||
  mongoose.model('projects', portfolioSchema);

export default Project;
