const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
>>>>>>> 6615680ecc789b5016f7e606fe6bf5a409499dc4
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
