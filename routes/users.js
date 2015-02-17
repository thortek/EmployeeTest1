var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var luke = {
    name: 'Luke Skywalker',
    address: {
      street: 'PO Box 123',
      city: "Secret Rebel Base",
      planet: "Yavin 4"
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca']
  };

  res.send(luke);
});

module.exports = router;
