const express = require('express');
const app = express();
const port = process.env.PORT || 10000;
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');
const printify_api_key = process.env.PRINTIFYAPIKEY;
const printify_base_url = 'https://api.printify.com/v1';
let mainToSfMain = null;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({message: 'server link succesful'});
})

app.post('/', (req, res) => {
    console.log(req.body);
    const data = JSON.stringify(req.body.key);

    console.log('data: ', data);

    res.json({message: 'data received'});
    mainToSfMain = data;
})

//send data to parent server
app.get('/sf/main', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3001/sf/main', {
            key: 'sleutel',
            data: mainToSfMain
        });
        res.send(`data sent to parent server ${response.data}`)
    }catch (error) {
        res.status(500).send(`Error sending data to parent server: ${error.message}`);
    }
})

//webshop
const apiClient = axios.create({
    baseURL: printify_base_url,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${printify_api_key}`
    }
});

//get shop id
app.get('/shops', async (req, res) => {
    try {
        const response = await apiClient.get('/shops.json');
        res.json(response.data);
    }catch (error) {
        res.status(error.response.status).json({error: error.message});
    }
})

//get products
const shopId = 14971537;
app.get('/products', async (req, res) => {
    try {
    const response = await apiClient.get(`/shops/${shopId}/products.json`);
    res.json(response.data.data);
    //sizes
   console.log(response.data.data);
    }
    catch(error) {
       res.status(error.response.status).json({error: error.message});
    }
});


app.listen(port, console.log(`server listening on port ${port}`));