import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

router.get("/bookings", async (req,res)=>{
  const data = await Booking.find();
  res.json(data);
});

export default router;