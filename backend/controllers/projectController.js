const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const { projectName, course, description, deadline } = req.body;

    const project = new Project({
      teacherId: req.user.id,
      projectName,
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
    const projects = await Project.find({ teacherId: req.user.userId });
    res.json(projects);
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