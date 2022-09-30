exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getForm = (req, res, next) => {
  res.render("form");
};

exports.getPayment = (req, res, next) => {
  res.render("payment");
};
