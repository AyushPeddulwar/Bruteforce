const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config(); 

const app = express();
const PORT = 3000;

// Hidden secret
const SECRET_CODE = 1971; // The secret code
const SECRET_KEY = process.env.SECRET_KEY;

app.use(express.static(path.join(__dirname, "public")));
// Serve static files from the public directory

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // Serves index.html

app.post("/check-code", (req, res) => {
  const { code } = req.body;

  if (code === SECRET_CODE) {
    res.json({ message: `✅ Your secret key is: ${SECRET_KEY}` });
  } else {
    res.json({ message: "❌ Invalid code. Access denied." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
