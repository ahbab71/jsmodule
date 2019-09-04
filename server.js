const express = require('express')
const UserRouter = require('./routes.js')
const {getProId} = require('./routesContolars.js')


const app = express();


app.get('/', (req, res) => {
    let result = res.end('<h1>Hi my name is Ahbab</h1>')
    console.log(result)
})

app.get('/products/:proid', getProId)



app.use('/users', UserRouter);


// Database connection
 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})
