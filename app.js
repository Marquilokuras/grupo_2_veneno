//const formAdminRouter = require('./routers/formsAdministrador');
const express = require('express');
const app = express();
const homeRouter = require('./routers/home');
const productRouter = require('./routers/product');
const usersRouter = require('./routers/users');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.set('view engine','ejs');

const port = 4200;

app.listen(port, () => {
    console.log('El servidor está funcionando en el puerto '+ port);
});


app.use('/',homeRouter);

app.use('/products',productRouter);

app.use('/login', usersRouter);

app.use('/', usersRouter);

//app.use('/productCart',productRouter);

//app.use('/formularioAdministrador',formAdminRouter);



