import express from "express";

const router = express.Router();

router.post("/", (req,res)=>{
  res.json({reply:"Welcome to Azure Pines 🌿"});
});

export default router;