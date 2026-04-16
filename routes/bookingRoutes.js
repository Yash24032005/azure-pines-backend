// import express from "express";
// import { createBooking } from "../controllers/bookingcontroller.js";

// const router = express.Router();

// router.post("/", createBooking);

// export default router;

import express from "express";
import { createBooking, getBookings } from "../controllers/bookingcontroller.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings);   // 🔥 यह line add करनी है

export default router;