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
    origin: "http://localhost:5173",
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

app.listen(process.env.PORT);
