const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

const app = express()
app.use(cors())
app.use(bodyParser.json())

const uri = process.env.DB_PATH;
let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.post('/addTreatments', (req, res) => {

    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        collection.insert(users, (error, result) => {
            if(error) {
                console.log(error);
                res.status(500).send({ message:error });
            }
            else{
                res.send(result.ops[0]);
            }
        })

        client.close();
    });

});


app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT || 4200;

app.listen(port, () => console.log(`App listening at :${port}`))