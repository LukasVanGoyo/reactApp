const express = require('express');

const app = express();
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const Image = require('./collection/image')
const { errorHandler } = require('./middleware/errorMiddleware')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors')
app.use(cors({
    origin: true,
    methods: ['GET', 'POST']
}))



const fileUpload = require('express-fileupload');
app.use(fileUpload());




const questions = require('./routes/questions.js');
const products = require('./routes/products.js');
const users = require('./routes/users.js');
const images = require('./routes/images.js')

app.use('/', questions)
app.use('/api/products', products)
app.use('/api/user', users)
app.use('/api/images', images)

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

app.use(errorHandler)

const ConnectionURL = process.env.DB_CONNECT;
const PORT = process.env.PORT || 3003;



mongoose.connect(ConnectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
.catch((error) => console.log(error.message));
