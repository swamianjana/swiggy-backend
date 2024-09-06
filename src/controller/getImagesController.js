
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
    const countriesStr = JSON.stringify(countries);

    res.send(countriesStr);
}

exports.getData = (request, response) => {
    // request -> data came from client
    // response -> send data to client

    response.send("Hello anjana");
}