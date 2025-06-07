import Gig from "../models/gig.js";

export const createGig = async (req, res) => {
  try {
    const gig = await Gig.create({ ...req.body, createdBy: req.user.userId });
    res.status(201).json(gig);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllGigs = async (req, res) => {
  try {
    const gigs = await Gig.find().populate('createdBy', 'name role');
    res.status(200).json(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getGigById = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id).populate('createdBy', 'name role');
    if (!gig) return res.status(404).json({ message: 'Gig not found' });
    res.status(200).json(gig);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return res.status(404).json({ message: 'Gig not found' });
    if (gig.createdBy.toString() !== req.user.userId)
      return res.status(403).json({ message: 'Not authorized to delete this gig' });

    await gig.deleteOne();
    res.status(200).json({ message: 'Gig deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
