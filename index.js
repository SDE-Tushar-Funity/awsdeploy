require("dotenv").config();
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ success: true });
});
app.listen(process.env.PORT || 80, () => {
  console.log("listending on port", process.env.PORT || 80);
});
