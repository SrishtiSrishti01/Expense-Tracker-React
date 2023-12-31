//@desc get all transactions
//@route GET /api/v1/transactions
//@access Public

exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

//@desc Add all transactions
//@route POST /api/v1/transactions
//@access Public

exports.addTransactions = (req, res, next) => {
  res.send("POST transactions");
};

//@desc delete all transactions
//@route DELETE /api/v1/transactions/:id
//@access Public

exports.deleteTransactions = (req, res, next) => {
  res.send("DELETE transactions");
};
