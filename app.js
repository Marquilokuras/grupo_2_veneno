const express = require('express');
const app = express();
const productRouter = require('./routers/product');
const homeRouter = require('./routers/home');
const formAdminRouter = require('./routers/formsAdministrador');

app.use(express.static('./public'));
app.set('view engine','ejs');

const port = 4200;

app.listen(port, () => {
    console.log('El servidor está funcionando en el puerto '+ port);
});

app.use('/',homeRouter);

app.use('/productCart',productRouter);

app.use('/',productRouter);

app.use('/formularioAdministrador',formAdminRouter);

/* 
app.post('/productDetail', (req, res) => {
    res.redirect('/productCart');
});

app.get('/login', ( req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/users/login.html'));
})

app.post('/login', ( req, res)=>{
    res.redirect('/');
})

app.get('/register', ( req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/users/register.html'));
})

app.post('/register', ( req, res)=>{
    res.redirect('/login');
}) */


