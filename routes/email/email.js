const express = require("express");
const route = express.Router();
route.get("/", (req, res) => {
  console.log();
  filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(req.query.email)) {
    return res.status(200).json({ valid: true });
  } else {
    return res.status(400).json({ valid: false });
  }
});
module.exports = route;
