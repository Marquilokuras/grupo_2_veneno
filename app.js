const express = require('express');
const app = express();
const productRouter = require('./routers/product');
const homeRouter = require('./routers/home');
const formAdminRouter = require('./routers/formsAdministrador');
const usersRouter = require('./routers/users');

app.use(express.static('./public'));
app.set('view engine','ejs');

const port = 4200;

app.listen(port, () => {
    console.log('El servidor está funcionando en el puerto '+ port);
});

app.use('/',homeRouter);

//app.use('/productCart',productRouter);

app.use('/products',productRouter);

app.use('/formularioAdministrador',formAdminRouter);

app.use('/login', usersRouter);

app.use('/', usersRouter);



