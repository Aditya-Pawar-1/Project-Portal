const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },

  projectName: {
    type: String,
    required: true,
  },
  
  projectID: {
    type: String,
    required: true,
  },

  course: {
    type: String,
    required: true,
  },
  
  department: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  deadline: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  submissions: {
    type: [mongoose.Types.ObjectId],
    ref: "Submission",
    default: []
  },
});

module.exports = mongoose.model("project", projectSchema);
