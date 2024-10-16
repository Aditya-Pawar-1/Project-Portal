const Project = require("../models/Project");
const User = require("../models/User");

exports.createProject = async (req, res) => {
  try {
    const { projectName, projectID, course, description, deadline } = req.body;
    let teacher = await User.find({ ID: req.user.id });
    let teacherId = teacher[0]._id;
    const project = new Project({
      teacherId,
      projectName,
      projectID,
      course,
      description,
      deadline,
    });

    await project.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getProjects = async (req, res) => {
  try {
    let teacher = await User.find({ ID: req.user.id });
    let teacherId = teacher[0]._id;
    const projects = await Project.find({ teacherId });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getOneProject = async (req, res) => {
  try {
    let p = await Project.findOne({ projectID: req.params.PID });
    console.log(p);
    
    res.json(p);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.closeProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    project.isClosed = true;
    await project.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
