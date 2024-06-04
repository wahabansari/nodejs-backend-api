import User from "../modals/user.js";
import jwt from "jsonwebtoken";

const handleUserSignp = async (req, res) => {
  const { name, email, password } = await req.body;
  await User.create({
    name,
    email,
    password,
  });
  if (!name || !email || !password) {
    res.json({ msg: "All fields must be filled...!" });
  }
  return res.json({ msg: "Account Created Successfully!!!" });
};

export { handleUserSignp };
