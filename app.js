const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));
app.set('view engine','ejs');

const PORT = 4200;

app.listen(PORT, () => {
    console.log('El servidor está funcionando en el puerto '+PORT);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/products/productCart.html'));
});

app.post('/productCart', (req, res) => {
    res.redirect('/')
});

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