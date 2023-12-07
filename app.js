//const formAdminRouter = require('./routers/formsAdministrador');
const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const app = express();
const homeRouter = require('./routers/home');
const productRouter = require('./routers/product');
const usersRouter = require('./routers/users');
const apiProductsRouter = require("./routers/api/apiProducts");
const apiUsersRouter = require("./routers/api/apiUsers");
const cors = require('cors');

const loggedMiddleware = require('./middlewares/loggedMiddleware');

app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.use(cors());
app.set('view engine','ejs');


//Session 
app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}))
app.use(loggedMiddleware);

const port = 4200;

app.listen(port, () => {
    console.log('El servidor está funcionando en el puerto '+ port);
});

app.use('/',homeRouter);

app.use('/products',productRouter);

app.use('/users', usersRouter);

app.use('/api', apiProductsRouter);

app.use("/api", apiUsersRouter);
