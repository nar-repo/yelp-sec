const express = require('express');
const cors = require('cors');
const yelp = require('yelp-fusion');

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const apiKey = 'cECmX8BS24bHa18gHPJvJfsBGXeJJnSrpK0dm4QtxWvpwmTus9L2eqLLjQYcnJ6CXQORkD5Q49Yomk-j0_TEATsDRj42_bCkqDRJzj48QJUh8x8oJvEyWzQDmJ7_Y3Yx';
const client = yelp.client(apiKey);



app.get('/search', (req, res) => {

    var location = req.query.location;   
    var term = req.query.term;

    const searchRequest = {term: term, 
    location: location,
    radius: 10000,
    sort_by: 'best_match',
    limit: 8}

    client.search(searchRequest)
    .then(response => {
        console.log(response.jsonBody.businesses);
        res.send(response.jsonBody.businesses);
    })
    .catch(error => {
        console.log(error);
    });
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


