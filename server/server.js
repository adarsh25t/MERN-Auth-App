const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connection = require('./database/connection');
const router = require('./router/route');



const app = express();

/* middleware */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');



/* api request */
app.use('/api',router);

const port = 8086;



app.listen(port,()=> {
    connection()
    console.log(`app started at port ${port}`);
})
// fXL2u8YtRF2VJTpb