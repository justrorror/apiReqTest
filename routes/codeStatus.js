const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { query } = req;
  let answer;

  if (query.code && Number(query.code) && Number(query.code) < 1000) {
    res.status(query.code);
  }
  if (query.answer) {
    try {
      answer = JSON.parse(query.answer);
    } catch (e) {
      console.error(`Error: ${e.message}`);
    }
  }

  res.send(answer || { status: 'OK' });
});

module.exports = router;
