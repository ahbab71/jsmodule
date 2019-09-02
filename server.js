const express = require('express')

const app = express();



app.get('/about', (req, res) => {
    let result = res.send('<h1>Hi I am About Page</h1>')
    console.log(result)
})


app.get('/blog', (req, res) => {
    let result = res.send('<h1>Hi I am Blog Page</h1>')
    console.log(result)
})




app.get('/', (req, res) => {
    let result = res.end('<h1>Hi my name is Ahbab</h1>')
    console.log(result)
})


app.get('*', (req, res) => {
    let result = res.end('<h1>404 Not Found...!</h1>')
    console.log(result)
})



// Database connection
 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})
