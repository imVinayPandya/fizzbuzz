const router = require('express-promise-router')();

const homeRouter = require('./services/home/home');
const fizzbuzzRouter = require('./services/fizzbuzz/index');

/** Home routes */
router.get('/', homeRouter.homeRoute);

/** FizzBuzz routes */
router.get('/fizzbuzz', fizzbuzzRouter.getFizzbuzz);
router.get('/fizzbuzz/:count', fizzbuzzRouter.getFizzbuzz);

module.exports = router;
