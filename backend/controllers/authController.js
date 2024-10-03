const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { Name, Email, role, ID, Password } = req.body;

  console.log(Name, Email, role, ID, Password);

  try {
    let user = await User.findOne({ ID });
    if (user) return res.status(400).json({ message: "User already exists" });

    switch (role) {
      case "student":
        user = new User({
          Name,
          Email,
          role,
          ID,
          role,
          student: {
            Department: req.body.Department,
            submittedProjects: req.body.submittedProjects,
          },
        });
        break;
      case "teacher":
        user = new User({
          Name,
          Email,
          role,
          ID,
          role,
          teacher: {
            Department: req.body.Department,
            projectCreated: req.body.projectCreated,
          }, // Add other teacher-specific fields here
        });
        break;
      default:
        return res.status(400).json({ message: "Invalid role" });
    }

    const salt = await bcrypt.genSalt(10);
    user.Password = await bcrypt.hash(Password, salt);

    await user.save();

    const payload = { user: { id: user.ID, role: user.role } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5h" },

      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { userId, Password } = req.body;
  try {
    let user = await User.findOne({ userId });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const payload = { user: { id: user.ID, role: user.role } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
