const express = require('express');
const app = express();

const getImagesController = require('./src/controller/getImagesController');

app.get('/', getImagesController.getData);

app.get('/country/all', getImagesController.getCountry);

// function getCountry(req, res) {
    
//     const countries = {
//         INDIA: {
//             name: "India",
//             code: "+91"
//         },
//         US: {
//             name: "United States",
//             code: "+84"
//         }
        
//     }

//     // convert object to string
//     const countriesStr = JSON.stringify(countries);

//     res.send(countriesStr);
// }

// function getData(request, response){
//     // request -> data came from client
//     // response -> send data to client

//     response.send("Hello anjana");
// }

const port = 8080;
app.listen(port, () => {
    console.log(`server starting on  ${port}` )
});