import jwt from "jsonwebtoken";
import Admin from "../models/admin.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET is not set in backend/.env — add: JWT_SECRET=your_secret_key");
      return res.status(500).json({
        message: "Server misconfigured. Add JWT_SECRET to backend .env file.",
      });
    }

    const admin = await Admin.findOne({ email: email.trim().toLowerCase() });

    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { adminId: admin._id.toString() },
      secret,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      adminId: admin._id,
    });
  } catch (err) {
    console.error("Admin login error:", err);
    res.status(500).json({
      message: "Login failed. Please try again.",
    });
  }
};
