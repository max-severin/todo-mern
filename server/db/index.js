const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

(async () => {
  try {
    await mongoose.connect(
      MONGO_URI, 
      { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
  } catch(error) {
    console.error(error);
  }
})();

module.exports = mongoose.connection;