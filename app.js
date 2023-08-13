const express = require('express');
const app = express();
const productCartRouter = require('./routers/productCart');
const homeRouter = require('./routers/home');
const formAdminRouter = require('./routers/formsAdministrador');

app.use(express.static('./public'));
app.set('view engine','ejs');

const PORT = 4200;

app.listen(PORT, () => {
    console.log('El servidor está funcionando en el puerto '+PORT);
});

app.use('/',homeRouter);

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/products/productDetail.html'));
});

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
})

app.use('/productCart',productCartRouter);

app.use('/formularioAdministrador',formAdminRouter);
