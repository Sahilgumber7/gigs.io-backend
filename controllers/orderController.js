import Order from '../models/order.js';
import Gig from '../models/gig.js';

export const createOrder = async (req, res) => {
  try {
    const { gig: gigId, deadline, requirements, razorpayPaymentId } = req.body;

    if (!razorpayPaymentId) {
      return res.status(400).json({ error: 'Missing Razorpay payment ID' });
    }

    const gig = await Gig.findById(gigId);
    if (!gig) return res.status(404).json({ error: 'Gig not found' });

    const order = await Order.create({
      gig: gig._id,
      client: req.user.userId,
      freelancer: gig.createdBy,
      deadline,
      requirements,
      razorpayPaymentId, // store it in DB
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [
        { client: req.user.userId },
        { freelancer: req.user.userId }
      ],
    })
      .populate('gig')
      .populate('client', 'name email')
      .populate('freelancer', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'in-progress', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedOrder) return res.status(404).json({ error: 'Order not found' });

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
