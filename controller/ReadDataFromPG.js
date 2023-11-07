const express = require("express");
const pool = require("./connectDB");
const router = express.Router();

router.use(express.json());

router.get("/PullData", async (req, res) => {
  try {
    const year = req.query.year;
    const result = await pool.query(`
      SELECT "Country name", "Year", "Population"
      FROM populationdata
      WHERE "Year" = $1
      ORDER BY "Country name"
    `, [year]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
router.get("/test", async (req, res) => {
  try {
    res.send("Hi Maxky");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;