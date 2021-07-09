const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => console.log('Connected to mongo atlas')
    );
  } catch (error) {
    console.log('could not connect', error);
    process.exit(1);
  }
};

module.exports = connectDB;
