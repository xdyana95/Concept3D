const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing initial markers into DynamoDB. Please wait.");

const initialLocations = [
    {
      id: 1,
      name: 'Denver',
      lat: 39.742043,
      lng: -104.991531,
    },
    {
      id: 2,
      name: 'LA',
      lat: 34.052235,
      lng: -118.243683,
    },
    {
      id: 3,
      name: 'Boston',
      lat: 42.364506,
      lng: -71.038887,
    },
];
  
initialLocations.forEach((marker) => {
    var params = {
        TableName: 'Markers',
        Item: marker
    };

    docClient.put(params, (err, data) => {
       err 
        ? console.error("Unable to add marker", marker.name, ". Error JSON:", JSON.stringify(err, null, 2)) 
        : console.log("PutItem succeeded:", marker.name);
    });
});