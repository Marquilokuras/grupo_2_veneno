const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

const PORT = 4200;

app.listen(PORT, () => {
    console.log('El servidor está funcionando en el puerto '+PORT);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

app.get('/productCart/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'));
});