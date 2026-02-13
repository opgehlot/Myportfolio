import Admin from "../models/admin.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await admin.comparePassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      success: true,
      message: "Login successful",
      adminId: admin._id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
