import express from "express";
import { getRazorpayInstance } from "../utils/razorpay.js";

const router = express.Router();

router.post("/order", async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating order");
  }
});

export default router;