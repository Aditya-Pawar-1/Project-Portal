const express = require("express");
const router = express.Router();
const submissionController = require("../controllers/submissionController");
const auth = require("../middlewares/authUser");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/:studentID",
  auth(["student"]),
  upload.fields([
    { name: "presentation", maxCount: 1 },
    { name: "paper", maxCount: 1 },
    { name: "photographs", maxCount: 5 },
  ]),
  submissionController.submitProject
);

// router.get(
//   "/projects/:projectId",
//   auth(["teacher", "admin"]),
//   submissionController.getSubmissions
// );

router.get(
  "/:studentID",
  auth(["student"]),
  submissionController.getStudentSubmissions
);

module.exports = router;
