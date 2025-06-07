import mongoose from 'mongoose';

const gigSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: Number, required: true },
  deliveryTime: { type: Number, required: true }, // in days
  category: { type: String, required: true },
  tags: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true
});

const Gig = mongoose.model('Gig', gigSchema);
export default Gig;
