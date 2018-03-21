var express = require('express');
const router = express.Router();

/* GET users listing. */
router
.route('/')
.get( function(req, res, next) {
  res.status(200).json({
    status: true,
    msg: 'GET IS CALLED'
  })
})
.options((req, res, next)=>{
  res.status(200).json({
    status: true,
    msg: 'OPTIONS IS CALLED'
  })
});

module.exports = router;
