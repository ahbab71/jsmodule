const fs = require('fs');


// File System Write 


const testObj = {
    name : "Ahbab Islam",
    email : "ahbabislam@gmail.com",
    address: {
        city: 'sylhet',
        country: 'BD'
    }
};

const data = JSON.stringify(testObj);

fs.writeFile('app.json',data, (err) => {
    if(err){
       // console.log(err);
    } else {
       // console.log('File writing Successfully');
    }
});

// File System Read 


fs.readFile('app.json', (err,data) => {
    if (err) {
        console.log(err);
    }
    
    let result = JSON.parse(data);

    console.log(result.email)

});






