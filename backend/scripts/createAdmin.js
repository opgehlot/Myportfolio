import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../models/admin.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");

    const email = process.argv[2]?.trim();
    const password = process.argv[3]?.trim();

    if (!email || !password) {
      console.log("Usage: node scripts/createAdmin.js email password");
      process.exit(1);
    }

    let admin = await Admin.findOne({ email });

    if (admin) {
      console.log("Admin exists — updating password");
      admin.password = password;
      await admin.save();

      console.log("✅ Password updated");
      process.exit();
    }

    admin = new Admin({ email, password });
    await admin.save();

    console.log("✅ Admin created");
    console.log("Email:", email);

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();
