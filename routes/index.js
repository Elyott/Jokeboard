
const router = require('express').Router();
const queries = require('../db/queries');

// routes.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'Connected!'
//   });
// });




// *** GET all shows *** //
router.get('/jokes', function (req, res, next) {
  queries.getAll()
    .then(function (jokes) {
      res.status(200).json(jokes);
    })
    .catch(function (error) {
      next(error);
    });
});

module.exports = router;