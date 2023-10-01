const authMiddleware = (req,res,next)=>{
    if (req.session.usuario != undefined){
        next()
    }
    else (res.redirect('/users/login'))
}

module.exports = authMiddleware