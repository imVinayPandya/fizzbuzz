/**
 * Api Route Controller
 */

/**
 * Home page
 * @method GET
 * @route /
 */
exports.homeRoute = (_req, res) =>
  res.status(200).send('Abandon all hope, ye who enter here.');
