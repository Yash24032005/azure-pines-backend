export const createBooking = async (req, res) => {
  try {
    const { room, paymentId } = req.body;

    if (!room || !paymentId) {
      return res.status(400).json({ message: "Missing data" });
    }

    res.status(201).json({
      message: "Booking successful ✅",
      room,
      paymentId,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Booking failed ❌" });
  }
};