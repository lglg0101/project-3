'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});


// router.get('/about', (req, res, next) => {
//   res.render(`about`);
// });


// router.get('/userprofile', routeGuard, (req, res, next) => {
//   res.render('private');
// });

module.exports = router;


