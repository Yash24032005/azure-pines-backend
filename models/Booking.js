import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  room: String,
  checkIn: Date,
  checkOut: Date
});

export default mongoose.model("Booking", bookingSchema);