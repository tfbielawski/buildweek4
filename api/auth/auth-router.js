const authRouter = require("express").Router();
const User = require('./auth-model');
const { checkUsernameExists, checkRequirements } = require('./auth-middleware');
const { JWT_SECRET } = require('../secrets');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

authRouter.post('/register', checkRequirements, (req, res, next) => {
    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 8)

    User.add({ username, password: hash })
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)    
});

authRouter.post(
    '/login', 
    checkRequirements, 
    checkUsernameExists, 
    (req, res, next) => {
    if (bcrypt.compareSync(req.body.password, req.user.password)) {
        const token = buildToken(req.user)
        res.json({
            message: `welcome ${req.user.username}`,
            token
        })
    } else {
        next({ status: 401, message: 'invalid credentials' })
    }
});

function buildToken(user) {
    const payload = {
        subject: user.user_id,
        username: user.username
    }
    const options = {
        expiresIn: '1d',
    }
    const token = jwt.sign(
        payload, 
        JWT_SECRET, 
        options,
        )
    return token
}



module.exports = authRouter;
