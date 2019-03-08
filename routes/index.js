const path = require('path');
const router = require('express').Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Connected!'
  });
});


// *** GET all jokes *** //
router.get('/jokes', function (req, res, next) {
  queries.getAllJokes()
    .then(function (jokes) {
      res.status(200).json(jokes);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** GET single joke *** //
router.get('/jokes/:id', function (req, res, next) {
  queries.getSingleJoke(req.params.id)
    .then(function (joke) {
      res.status(200).json(joke);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** add joke *** //
router.post('/jokes', function (req, res, next) {
  queries.addJoke(req.body)
    .then(function (jokeID) {
      return queries.getSingleJoke(jokeID);
    })
    .then(function (joke) {
      res.status(200).json(joke);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** update joke *** //
router.put('/jokes/:id', function (req, res, next) {
  queries.updateJoke(req.params.id, req.body)
    .then(function () {
      return queries.getSingleJoke(req.params.id);
    })
    .then(function (joke) {
      res.status(200).json(joke);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** delete show *** //
router.delete('/jokes/:id', function (req, res, next) {
  queries.getSingle(req.params.id)
    .then(function (joke) {
      queries.deleteJoke(req.params.id)
        .then(function () {
          res.status(200).json(joke);
        })
        .catch(function (error) {
          next(error);
        });
    }).catch(function (error) {
      next(error);
    });
});

// *** GET all setlists *** //
router.get('/setlists', function (req, res, next) {
  queries.getAllSetlists()
    .then(function (setlists) {
      res.status(200).json(setlists);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** GET single setlist *** //
router.get('/setlists/:id', function (req, res, next) {
  queries.getSingleSetlist(req.params.id)
    .then(function (setlist) {
      res.status(200).json(setlist);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** add setlist *** //
router.post('/setlists', function (req, res, next) {
  queries.addSetlist(req.body)
    .then(function (setlistID) {
      return queries.getSingleSetlist(setlistID);
    })
    .then(function (setlist) {
      res.status(200).json(setlist);
    })
    .catch(function (error) {
      next(error);
    });
});


router.get('/users', function (req, res, next) {
  queries.getAllUsers()
    .then(function (users) {
      res.status(200).json(users);
    })
    .catch(function (error) {
      next(error);
    });
});

module.exports = router;