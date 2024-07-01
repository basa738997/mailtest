var express = require('express');
var router = express.Router();
const mailschema = require('../model/mailschema');
const { sendMail } = require('../utils/Sendmail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send-mail', function(req, res, next) {
  console.log(req.body)
  const mail = new mailschema({
    email: req.body.email
  })
  mail.save();
  sendMail(req, res);
  res.send('mail send successfully');
});


module.exports = router;
