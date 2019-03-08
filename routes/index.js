var express = require('express');
var router = express.Router();
var ethers = require('ethers');


router.get('/', function (req, res, next) {
  let value = ethers.utils.bigNumberify("20902747399");
  return res.json(value);

});


router.post('/nonce', function (req, res, next) {
  let content = req.body.nonce;
  return res.json(content);
});

module.exports = router;
