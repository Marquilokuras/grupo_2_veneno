const guestMiddleware = (req,res,next)=>{
    if (req.session.usuario == undefined){
        next()
    }
    else (res.redirect('/users/profile'))
}

module.exports = guestMiddleware