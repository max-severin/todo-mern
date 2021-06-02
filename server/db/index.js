const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

(async () => {
  try {
    await mongoose.connect(
      MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    );
  } catch (error) {
    console.error(error);
  }
})();

const dbConnection = mongoose.connection;

dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
dbConnection.once('open', () => console.log('MongoDB database connection established successfully'));

module.exports = dbConnection;
