const { sequelize } = require('./models');

process.on('uncaughtException', (err) => {
  console.log(err);
  console.log('UNCAUGHT EXCEPTION! Shutting down....');
  process.exit(1);
});

const app = require('./app');


const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    sequelize.authenticate().then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));
    console.log(`Server running on Port ${port}`);
});

process.on('unHandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLER REJECTION! Shutting down....');
  server.close(() => {
    process.exit(1);
  });
});




