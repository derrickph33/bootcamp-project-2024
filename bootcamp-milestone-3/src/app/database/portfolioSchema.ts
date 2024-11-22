import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Project = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string; 
};

// mongoose schema
const portfolioSchema = new Schema<Project>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  link: { type: String, required: false }, // Not required
});

// defining the collection and model
const Project = mongoose.models['projects'] ||
  mongoose.model('projects', portfolioSchema);

export default Project;
