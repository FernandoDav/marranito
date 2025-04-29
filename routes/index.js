var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index')
});

router.get('/registroanimal', (req, res) => {
  res.render('registroanimal');
});

router.get('/identificador', (req, res) => {
  res.render('identificador');
});






module.exports = router;

