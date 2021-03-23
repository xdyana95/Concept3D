const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const AWS = require("aws-sdk");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

app.get('/locations', (req, res) => {
  const params = {
    TableName: "Markers",
    ProjectionExpression: "#id, #name, #lat, #lng",
    ExpressionAttributeNames: {
        "#id": "id",
        "#name": "name",
        "#lat": "lat",
        "#lng": "lng",
    }
  };
  docClient.scan(params, (err, data) => {
    if (err) {
      console.error("Unable to read marker table ", JSON.stringify(err, null, 2));
    } else {
      return res.send({ locations: data.Items })
    }
  });
});

app.post('/locations', (req, res) => {

  const lat = Number(req.body.lat);
  const lng = Number(req.body.lng);
  
// todo: find better solution for creating new primary key
  const newMarker = {
    TableName: 'Markers',
    Item: {
      id: Math.random(),
      name: req.body.name,
      lat: lat,
      lng: lng,
    }
  };

  docClient.put(newMarker, (err, data) => {
    if (err) {
      console.error("Error creating new marker:  ", JSON.stringify(err, null, 2)) ;
    } else {
      console.log("New marker save success:  ", JSON.stringify(data, null, 2));
    }
  });
  res.status(200).send(newMarker.Item);
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log('RrrarrrrRrrrr server alive on port 3001');
});
