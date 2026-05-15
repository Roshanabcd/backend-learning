// const express = require("express");
// const mongoose = require("mongoose");
import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/users", userRoutes);    // Use user routes for /users endpoint

app.get("/", (req, res) => {
  res.send("My First API");
});
mongoose.connect("mongodb://127.0.0.1:27017/first-api").then(()=>{
  console.log("Connected to MongoDB");
}).catch((err)=>{
  console.error("Error connecting to MongoDB", err);
});

app.post("/create-user", async (req, res) => {
  try { 
  const user = new User(req.body);
  await user.save();
  res.send("User created");
  res.status(201).json(user);
} catch (error) {
  console.error("Error creating user", error);
  res.status(500).send("Error creating user");
}
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});