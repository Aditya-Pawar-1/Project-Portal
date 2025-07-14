const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { Name, Email, role, ID, Password } = req.body;
  console.log("in auth");
  
  try {
    // Check if the user already exists
    let user = await User.findOne({ ID });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Prepare user data
    const userData = {
      Name,
      Email,
      role,
      ID,
    };

    if (role === "student") {
      userData.student = {
        Department: req.body.Department,
        submittedProjects: [],
      };
    } else if (role === "teacher") {
      userData.teacher = {
        Department: req.body.Department,
      };
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    // Create and hash password
    user = new User(userData);
    const salt = await bcrypt.genSalt(10);
    user.Password = await bcrypt.hash(Password, salt);

    // Save user to the database
    await user.save();

    // Create JWT token
    const payload = { user: { id: user.ID, role: user.role } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5h" }, (err, token) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Token generation error" });
      }
      // Include user data in response
      res.json({ token, user: { id: user.ID, role: user.role } });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" }); // Changed to return a JSON response
  } finally {
    console.log("user registed");
  }
};


exports.login = async (req, res) => {
  const { ID, Password } = req.body;

  try {
    // Find user by ID
    let user = await User.findOne({ ID });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Check password
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Create JWT token
    const payload = { user: { id: user.ID, role: user.role } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5h" }, (err, token) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Token generation error" });
      }
      // Include user data in response
      res.json({ token, user: { id: user.ID, role: user.role } });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" }); // Changed to return a JSON response
  }
};

