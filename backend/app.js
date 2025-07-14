const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabase = require("./config/db");
const indexRouter = require("./routes/indexRouter");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://project-portal-forontend.onrender.com",
    credentials: true,
  })
);

connectDatabase();

app.get("/", indexRouter);

const authRoutes = require("./routes/authRouter");
const projectRoutes = require("./routes/projectRouter");
const submissionRoutes = require("./routes/submissionRouter");
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/submissions", submissionRoutes);
app.get("/api/user/sid/:id", async (req, res) => {
  const { id } = req.params; // Extract user ID from request parameters

  try {
    // Find the user by MongoDB ID
    const user = await User.findById(id).select("SID"); // Only select the SID field

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send back the SID
    res.status(200).json({ SID: user.SID });
  } catch (error) {
    console.error("Error fetching user SID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(process.env.PORT);
