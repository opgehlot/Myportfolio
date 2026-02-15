import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const raw = req.headers.authorization;
  if (!raw) return res.status(401).json({ message: "No token" });

  const token = raw.startsWith("Bearer ") ? raw.slice(7) : raw;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}
