const express = require("express");
const https = require("https");


const app = express();

app.get("/", function (req, res) {

    https.get("Api url", function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherdata = JSON.parse(data)
            const temp = weatherdata;
            //this is to retreave data from weather api
        }
    });

    res.send("server is running");
});

app.listen(3000, function () {
    console.log("server is running on port 3000");
});