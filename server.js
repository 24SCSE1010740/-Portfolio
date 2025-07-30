// server.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));            // Serve static files
app.use(express.json());                      // Parse JSON body

// Simple contact endpoint
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New message:", { name, email, message });
  res.send("Thanks for contacting me!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
