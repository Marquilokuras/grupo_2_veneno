
const loggedMiddleware = (req, res, next) => {

    res.locals.isAnUserLogged = false;

    if(req.session.usuario){
        res.locals.isAnUserLogged = true;
        res.locals.userData = req.session.usuario;
        console.log(req.locals)
    }

    next();
}

module.exports = loggedMiddleware;