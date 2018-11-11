const bcrypt = require('bcryptjs');
const knex = require('../db/knex');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return knex('users')
    .insert({
      email: req.body.email,
      password: hash
    })
    .returning('*');
}

function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({
    status: 'Please log in'
  });
  return next();
}

function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json({
    status: 'You are already logged in'
  });
  return next();
}

module.exports = {
  comparePass,
  createUser,
  loginRequired,
  loginRedirect
};