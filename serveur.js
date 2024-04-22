const express = require('express')


const productRoute = require('./routes/product')
const userRoute = require('./routes/user')
const hostname = 'localhost';
require('./config/connect')
const app = express()
// const cors = require('cors')

app.use(express.json());

app.use('/product',productRoute)
app.use('/user',userRoute)

app.use('/getimage/',express.static('./uploads'))

app.listen(3003,hostname=>{
    console.log('server work')
});
