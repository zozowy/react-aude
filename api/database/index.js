const mongoose = require('mongoose');
require('dotenv').config();
const databaseUrl=process.env.DATA_BASE_URL;


mongoose.connect(databaseUrl).then(() => {
    console.log('connected to db!');
}).catch((err) => {
    console.log('connexioon KO', err);
});
