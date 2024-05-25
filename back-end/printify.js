require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const printify_api_key = process.env.PRINTIFYAPIKEY;
const printify_base_url = 'https://api.printify.com/v1';
app.use(bodyParser.json());
const titles = [];

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
    res.json(response.data);
    }
    catch(error) {
       res.status(error.response.status).json({error: error.message});
    }
});

//get oversized Tee essential data


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})