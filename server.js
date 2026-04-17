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

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// 🔥 Sabse pehle environment variables load karein
dotenv.config();

// Routes Import
import bookingRoutes from "./routes/bookingRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js"; // Razorpay logic isme hai
import chatRoutes from "./routes/chatRoutes.js";

const app = express();

// ✅ Middleware Setup
// CORS ko specifically aapke GitHub Pages ke liye configure kiya gaya hai
app.use(cors({
  origin: 'https://yash24032005.github.io',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json()); // Frontend se aane wale JSON data ko read karne ke liye

// ✅ API Routes Integration
// In routes ke zariye hi frontend Razorpay aur MongoDB se connect karega
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/payment", paymentRoutes); // 💳 Razorpay link/order yahan se handle hoga
app.use("/api/chat", chatRoutes);

// ✅ Database Connection (MongoDB Atlas)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Root Route for Health Check
app.get("/", (req, res) => {
  res.send("Azure Pines Backend API is Live! 🚀");
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  // Debugging ke liye check kar rahe hain ki key load hui ya nahi
  if (process.env.RAZORPAY_KEY_ID) {
    console.log("💳 Razorpay Credentials Loaded");
  } else {
    console.log("⚠️ Warning: Razorpay Key is missing in .env");
  }
});