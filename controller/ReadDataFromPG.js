const express = require("express");
const pool = require("./connectDB");
const router = express.Router();

router.use(express.json());

router.get("/PullData", async (req, res) => {
  try {
    const result = await pool.query(`
    SELECT *
    FROM test_sqn_pern
    ORDER BY "Year" DESC
    LIMIT 10;`);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;