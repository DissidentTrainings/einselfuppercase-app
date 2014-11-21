var express = require('express');
var router = express.Router();
var upper = require('einselfuppercase').upperCaseEinsElf;

/* GET users listing. */
router.get('/:word', function(req, res) {

  // upper case the input
  var result = upper(req.params.word);
  // Response to browser with json
  res.status(200).json({'result': result});
});

module.exports = router;