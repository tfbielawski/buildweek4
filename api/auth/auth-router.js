const authRouter = require("express").Router()



//add endpoint functions here


authRouter.get("/", (req, res, next) => {
    Projects.findProjects()
        .then((findP) => {res.json(findP);})
        .catch(next);
});



module.exports = authRouter;