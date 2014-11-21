var express = require('express');
var router = express.Router();
var validate = require('einselfuppercase').validate;


/* GET users listing. */
router.get('/:word', function(req, res) {

  console.log(req.params.word);

  var result = validate('hans');
  console.log(result);
  res.send('respond with a resource');
});

module.exports = router;
