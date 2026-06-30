import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Article', articleSchema);
