const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  teachersManaged: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: []
  }],
});

const studentSchema = new mongoose.Schema({
  Department: {
    type: String,
    required: true,
  },
  submittedProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Submission",
    default: [] // Initialize with an empty array
  }],
});

const teacherSchema = new mongoose.Schema({
  Department: {
    type: String,
    required: true,
  },
  projectCreated: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    default: [] // Initialize with an empty array
  }],
});

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "student", "teacher"],
    default: "student",
    required: true,
  },

  admin: adminSchema,
  student: studentSchema,
  teacher: teacherSchema,
});

module.exports = mongoose.model("User", userSchema);