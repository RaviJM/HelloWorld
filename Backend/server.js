const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/api/users/name-age", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM get_users_name_age()");

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to fetch users",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
