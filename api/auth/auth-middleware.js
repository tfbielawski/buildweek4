const User = require('./auth-model');
const { JWT_SECRET } = require('../secrets');
const jwt = require('jsonwebtoken');

const checkUsernameExists = async (req, res, next) => {
    try {
        const [user] = await User.findBy({ username: req.body.username })
        if (!user) {
            next({ status: 401, message: 'invalid credentials' })
        } else {
            req.user = user
            next()
        }
    } catch (err) {
        next(err)
    }
}

const checkRequirements = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            res.status(422).json({
                message: "username and password required"
            })
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

const restricted = (req, res, next) => {
  const token = req.headers.authorization
    if (!token) {
      return next({ status: 401, message: 'Token required' })
    }
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        next({ status: 401, message: 'Token invalid' })
      } else {
        req.decodedToken = decodedToken
        next()
      }
  })
};

module.exports = {
    checkRequirements,
    checkUsernameExists,
    restricted,
}
