const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },

  projectID: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
  },

  PID: {
    type: String,
    required: true,
  },

  submissionDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  githubLink: {
    type: String,
    required: true,
  },

  projectReport: {
    type: Buffer,
    required: true,
  },

  projectPresentation: {
    type: Buffer,
    required: true,
  },

  projectImages: {
    type: [Buffer],
    required: true,
  },
});

module.exports = mongoose.model("submissions", submissionSchema);
