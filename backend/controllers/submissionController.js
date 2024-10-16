const Submission = require("../models/Submission");
const User = require("../models/User");
const Project = require("../models/Project");

exports.submitProject = async (req, res) => {
  const studentId = req.params.studentID;
  let user = await User.findOne({ ID: studentId });
  const { PID, githubLink } = req.body; 

  let project = await Project.findOne({ projectID: PID });

  try {
    // Create the new submission
    const submission = new Submission({
      studentId: user._id,
      projectID: project._id,  
      PID,
      githubLink,
      projectReport: req.files?.projectReport?.[0]?.buffer,
      projectPresentation: req.files?.presentation?.[0]?.buffer,
      projectImages: req.files?.photographs?.map((file) => file.buffer),
    });

    // Save submission
    await submission.save();
    res.json(submission);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error", err.message);
  }
};

exports.getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({
      projectId: req.params.projectId,
    })
      .populate("studentId", "course") // Replace with the actual fields in the User schema that you want to display
      .populate("projectId", "title"); // Replace with the actual fields in the Project schema that you want to display
    res.json(submissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getStudentSubmissions = async (req, res) => {
  try {
    const userId = req.params.studentID; // Get the student ID from the request parameters
    let user = await User.findOne({ ID: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const submissions = await Submission.find({ studentId: user._id })
      .populate("studentId")
      .populate("submissionDate", "projectID"); 

    res.json(submissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
