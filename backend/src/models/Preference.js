import mongoose from 'mongoose';

const preferenceSchema = new mongoose.Schema({
  writingTone: { type: String, default: 'professional' },
  articleLength: { type: String, default: 'medium' },
  topics: [String],
});

export default mongoose.model('Preference', preferenceSchema);
