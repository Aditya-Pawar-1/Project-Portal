const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const auth = require("../middlewares/authUser");

router.post("/", auth(["teacher"]), projectController.createProject);
router.get("/", auth(["teacher"]), projectController.getProjects);
router.patch("/:id/close", auth(["teacher"]), projectController.closeProject);

module.exports = router;
