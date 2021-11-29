const express = require('express');
const router = express.Router();
const xml = require('xml');
const validator = require('express-joi-validation').createValidator({});
const schemas = require('./schemas/');

/* GET users listing. */
router.get('/', validator.query(schemas.codeStatus), (req, res, next) => {
  const { query } = req;
  let answer = query.answer;

  res.status(query.code);

  if (query.type === 'xml') {
    const options = {
      declaration: true
    }

    answer = xml(answer, options);
    res.type('xml');
  }
  if (query.answerXml) {
    answer = query.answerXml;
    res.type('xml');
  }

  res.send(answer);
});

module.exports = router;
