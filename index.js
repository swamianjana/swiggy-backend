const express = require('express');
const cors = require('cors');
const {getData, getCountry, getImages} = require('./src/controller/getImagesController');
const { getCategories } = require('./src/controller/categoryController');
const { getRestaurent } = require('./src/controller/restaurentController');
const app = express();

app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3001' // Replace with the domain you want to allow
//   }));
app.options('*', cors());

app.use('/images', express.static('./src/data/images'));

app.get('/', getData);

app.get('/country/all', getCountry);

app.get("/get-image", getImages);

app.get("/category/all", getCategories );

app.get("/restaurent/all", getRestaurent);

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