const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("✅ E-Learning Backend is running on Render!");
});

// Get courses
app.get("/courses", (req, res) => {
  res.json([
    { id: 1, title: "HTML & CSS Basics", teacher: "Rakshu" },
    { id: 2, title: "JavaScript Beginner", teacher: "Gowda" }
  ]);
});

// Add course
app.post("/courses", (req, res) => {
  const newCourse = req.body;
  res.json({ message: "Course added successfully", course: newCourse });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
