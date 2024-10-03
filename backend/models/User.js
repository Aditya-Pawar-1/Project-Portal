const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  teachersManaged: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const studentSchema = new mongoose.Schema({
  Department: {
    type: String,
    required: true,
  },
  submittedProjects: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Submission",
  },
});

const teacherSchema = new mongoose.Schema({
  Department: {
    type: String,
    required: true,
  },
  projectCreated: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
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

/*
// Registration route
app.post('/register', async (req, res) => {
  const { role, adminSpecificField, studentSpecificField, teacherSpecificField } = req.body;

  // Create the user object based on the role
  let user;

  switch (role) {
    case 'admin':
      user = new User({
        role,
        admin: { adminSpecificField }, // Add other admin-specific fields here
      });
      break;
    case 'student':
      user = new User({
        role,
        student: { studentSpecificField }, // Add other student-specific fields here
      });
      break;
    case 'teacher':
      user = new User({
        role,
        teacher: { teacherSpecificField }, // Add other teacher-specific fields here
      });
      break;
    default:
      return res.status(400).json({ message: 'Invalid role' });
  }

  try {
    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user', error });
  }
});
*/
