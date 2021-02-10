import mongoose from "mongoose";

interface IPost extends mongoose.Document {
  title: string;
  body: string;
}

const PostSchema = new mongoose.Schema({
  title: { type: String },
  body: { type: String },
});

const Post = mongoose.model<IPost>("Post", PostSchema);
export default Post;
