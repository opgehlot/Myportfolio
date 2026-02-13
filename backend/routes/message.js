import express from "express";
import Message from "../models/Message.js";
import auth from "../middlewere/auth.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  await Message.create({ name, email, message });
  res.json({ message: "Message sent" });
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
