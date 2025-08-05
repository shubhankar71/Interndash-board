const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, "data.json");

app.use(express.json());
app.use(express.static(__dirname));

// Ensure data.json exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// POST route to save intern data
app.post("/api/interns", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const interns = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

  const newIntern = {
    name,
    email,
    password,
    referralCode: name.toLowerCase().replace(/\s+/g, "") + "2005",
    donations: 5000,
  };

  interns.push(newIntern);
  fs.writeFileSync(DATA_FILE, JSON.stringify(interns, null, 2));

  res.json(newIntern);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
