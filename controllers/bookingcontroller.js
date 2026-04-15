import Booking from "../models/Booking.js";

export const createBooking = async (req,res)=>{
  const data = await Booking.create(req.body);
  res.json({success:true,data});
};