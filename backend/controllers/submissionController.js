const Submission = require("../models/Submission");

exports.submitProject = async (req, res) => {
  const { projectId, githubLink } = req.body;

  try {
    // Create the new submission
    const submission = new Submission({
      studentId: req.user.id,
      projectId,
      githubLink,
      projectReport: req.files?.paper?.[0]?.buffer,
      projectPresentation: req.files?.presentation?.[0]?.buffer,
      projectImages: req.files?.photographs?.map((file) => file.buffer),
    });

    // Save submission
    await submission.save();
    res.json(submission);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
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
    const submissions = await Submission.find({ ID: req.params.studentId })
      .populate("ID", "Department") // Replace with the actual fields in the User schema that you want to display
      .populate("projectId", "title"); // Replace with the actual fields in the Project schema that you want to display
    res.json(submissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
