const Submission = require("../models/Submission");
const User = require("../models/User");
const Submissions = require("../models/Submission");
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
      projectReport: req.files?.paper?.[0]?.buffer,
      projectPresentation: req.files?.presentation?.[0]?.buffer,
      projectImages: req.files?.photographs?.map((file) => file.buffer),
    });

    // Save submission
    await submission.save();

    await Project.findOneAndUpdate(
      { projectID: PID },
      { $push: { submissions: user._id } },
      { new: true }
    );

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
    const userId = req.params.studentID;
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

// Example backend route to download files
exports.downloadFile = async (req, res) => {
  const { type, id } = req.params;

  try {
    const submission = await Submission.findById(id);
    if (!submission) {
      return res.status(404).send("Submission not found");
    }

    let fileData;
    let fileName;
    let contentType;

    switch (type) {
      case "presentation":
        fileData = submission.projectPresentation;
        fileName = "presentation.pdf";
        contentType = "application/pdf";
        break;
      case "report":
        fileData = submission.projectReport;
        fileName = "report.docx";
        contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        break;
      case "photo":
        fileData = submission.projectImages?.[0];
        fileName = "photo.jpg";
        contentType = "image/jpeg";
        break;
      default:
        return res.status(400).send("Invalid file type");
    }

    if (!fileData || !fileData.length) {
      return res.status(404).send("File data not found");
    }

    // Set the appropriate headers for file download
    res.set({
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${fileName}"`, // Quotes around filename
    });

    // Ensure fileData is a buffer, and send it as a response
    res.send(Buffer.isBuffer(fileData) ? fileData : Buffer.from(fileData));
  } catch (error) {
    console.error("Error while processing file download:", error);
    res.status(500).send("Internal server error");
  }
};

