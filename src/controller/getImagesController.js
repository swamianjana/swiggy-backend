const path = require('path');

exports.getCountry = (req, res) => {

    const countries = {
        INDIA: {
            name: "India",
            code: "+91"
        },
        US: {
            name: "United States",
            code: "+84"
        }
    }

    // convert object to string
    // const countriesStr = JSON.stringify(countries);

    res.status(200).json(countries);
}

exports.getData = (request, response) => {
    // request -> data came from client
    // response -> send data to client

    response.send("Swiggy backend service");
}

exports.getImages = (req, res)  => {
    

    const imageName = req.query.ImageName;
    console.log(imageName);

    const images = {
        name: imageName,
        link: `/images/${imageName}`
    }

    res.status(200).json(images);
}