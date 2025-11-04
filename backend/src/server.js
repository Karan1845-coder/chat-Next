import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";



dotenv.config();
import authRoutes from "./routes/auth.route.js"

import { connectDB } from "./lib/db.js";
 
const app=express();
const PORT=process.env.PORT


app.get("/", (req, res) => {
  res.send("Server is working fine!");
});

app.use(express.json());//fetch sognup routef 
app.use(cookieParser());
app.use("/api/auth",authRoutes);



app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`);
   connectDB();
})