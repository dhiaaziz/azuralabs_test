const express = require('express');
const app = express();
require('dotenv').config()


const routers = require('./routers');
const errorHandler = require('./middlewares/error-handler');



// parse requests of content-type - application/json
app.use(express.json());



app.use('/api', routers);

app.use(errorHandler)


//handle route yang tidak ada
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'URL Not found'
    });
})

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);


