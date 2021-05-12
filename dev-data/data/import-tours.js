const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require("fs");
const Tour = require('./../../models/tourModel');

dotenv.config({path: './../../config.env'});
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then((con => {
    console.log('DB connection successful');

}));
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'))

const importData = async () => {
    try {
        const response = await Tour.create(tours)
        console.log("success");
    } catch (error) {
        console.log(error)
    }
    process.exit()
}
const clearAll = async () => {
    try {
        const response = await Tour.deleteMany()
        console.log('success')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    process.exit()
}
process.argv.forEach((arg) => {
    if (arg === '--import') {
        importData();
    }
    if (arg === '--clear') {
        clearAll();
    }
})