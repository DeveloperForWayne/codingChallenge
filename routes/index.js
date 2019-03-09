var express = require('express');
var router = express.Router();

router.post('/messageParrot', function (req, res, next) {
  let content = req.body;
  let message = content.message;
  let detail = content.detail;
  return res.json("Message is: "+ message + ", Detail is: " + detail);
});

module.exports = router;
