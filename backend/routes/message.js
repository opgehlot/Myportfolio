import express from "express";
import Message from "../models/Message.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Please provide name, email, and message.",
      });
    }
    const doc = await Message.create({ name, email, message });
    res.status(201).json({ message: "Message sent", id: doc._id });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({
      message: err.message || "Server error. Please try again later.",
    });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting message" });
  }
});

export default router;
