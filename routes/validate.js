var express = require('express');
var router = express.Router();
var validate = require('einselfuppercase').validate;


/* GET users listing. */
router.get('/:word', function(req, res) {


// Validate the input
  var result = validate(req.params.word);
// Response to browser with json
  res.json({'result': result});
});

module.exports = router;
