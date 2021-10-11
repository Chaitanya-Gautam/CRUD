const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const TaskRoute =require('./routes/task')

mongoose.connect('mongodb+srv://chaitanya_G:MongoDb123@tasks.at6gq.mongodb.net/CRUD?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err)
});

db.once('open', () => {
    console.log('Database connection Established!')
});

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT} `)
});

app.use('/api/employee',TaskRoute)