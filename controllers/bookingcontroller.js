// export const createBooking = async (req, res) => {
//   try {
//     const { room, paymentId } = req.body;

//     if (!room || !paymentId) {
//       return res.status(400).json({ message: "Missing data" });
//     }

//     res.status(201).json({
//       message: "Booking successful ✅",
//       room,
//       paymentId,
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Booking failed ❌" });
//   }
// };



import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    console.log("🔥 API HIT");
    console.log("BODY:", req.body);

    const { name, email, room, checkIn, checkOut } = req.body;

    if (!room) {
      return res.status(400).json({ message: "Room is required" });
    }

    const newBooking = new Booking({
      name,
      email,
      room,
      checkIn,
      checkOut
    });

    await newBooking.save();

    res.status(201).json({
      message: "Booking saved to DB successfully ✅",
      booking: newBooking
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Booking failed ❌" });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch bookings ❌" });
  }
};