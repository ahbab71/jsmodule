const express = require('express');
const router = express.Router();

// User Routes

router.get('/login', (req, res) => {
    res.send("<h1>I am Login Page</h1>");
});

router.get('/signup', (req, res) => {
    res.send("<h1>I am Login Signup Page</h1>");
});

router.get('/logout', (req, res) => {
    res.send("<h1>I am Login logout Page</h1>");
});

// User Routes End


router.get('/about', (req, res) => {
    let result = res.send('<h1>Hi I am About Page</h1>')
    console.log(result)
})


router.get('/blog', (req, res) => {
    let result = res.send('<h1>Hi I am Blog Page</h1>')
    console.log(result)
})







router.get('*', (req, res) => {
    let result = res.end('<h1>404 Not Found...!</h1>')
    console.log(result)
})


 module.exports = router;
