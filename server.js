const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');


dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
console.log(DB);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then((con => {
  console.log(con.connections);
  console.log('DB connection successful');
}));


app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
