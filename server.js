// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// // 🔥 IMPORTANT: sabse pehle config load karo
// dotenv.config();

// import bookingRoutes from "./routes/bookingRoutes.js";
// import adminRoutes from "./routes/adminRoutes.js";
// import paymentRoutes from "./routes/paymentRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/bookings", bookingRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/payment", paymentRoutes);
// app.use("/api/chat", chatRoutes);

// // ✅ Debug (temporary)
// console.log("RAZORPAY KEY:", process.env.RAZORPAY_KEY_ID);

// // DB Connect
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log(err));

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bookingRoutes from './routes/bookingRoutes.js';

dotenv.config();
const app = express();

// ✅ CORS fix for GitHub Pages
app.use(cors({
  origin: 'https://yash24032005.github.io', 
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json()); // ✅ Body parser (isliye data save nahi ho raha tha)

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// Routes
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));