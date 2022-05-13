var express = require('express');

var app = express();
var mongoose = require('mongoose')
var path = require('path')
const dotenv = require('dotenv');
dotenv.config();

var cors = require('cors')
app.use(cors({
    origin: true,
    methods: ['GET', 'POST']
}))






var questions = require('./routes/questions.js')



app.use('/', questions)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './build')))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, './build', 'index.html'));
    });
}
else {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
        });
}


const ConnectionURL = process.env.DB_CONNECT;
const PORT = process.env.PORT || 3003;

mongoose.connect(ConnectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
.catch((error) => console.log(error.message));
