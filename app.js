const express = require('express');
const cors = require('cors');
const app = express().use('*', cors());

const compression = require('compression');
const AppError = require('./utils/appError');
//const userRouter = require('./routes/userRoutes');


const globalErrorHandler = require('./controllers/errorController.js');

app.use(compression());

app.use(express.json());
app.use(express.static(`${__dirname}/storage`));

//permissions
//app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;