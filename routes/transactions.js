const express = require("express");
const router = express.Router();

const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../controllers/transactionsController");

router.route("/:id").delete(deleteTransactions);

router.route("/").get(getTransactions).post(addTransactions);
// router.get("/", (req, res) => res.send("hello router"));

module.exports = router;
