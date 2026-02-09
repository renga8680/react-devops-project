const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "Backend is running 🚀" });
});

app.listen(8000, () => {
  console.log("Server running on port 3000");
});
