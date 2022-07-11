const express = require('express');
const app = express();
const routes = require("./routes/server.routes");
const morgan = require('morgan');
const {mongoose} = require('./database');
const cors = require('cors');

//settings
app.set('puerto', process.env.PORT|| 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//app.use(routes);

//routes
app.use('/api/users', routes);

app.listen(app.get('puerto'));