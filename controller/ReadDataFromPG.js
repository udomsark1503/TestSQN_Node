const express = require("express");
const pool = require("./connectDB");
const router = express.Router();

router.use(express.json());

router.get("/PullData", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM populationdata
      WHERE "Year" = '1950'
      ORDER BY "Country name"
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
router.get("/test", async (req, res) => {
  try {
    res.send("Hi");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
