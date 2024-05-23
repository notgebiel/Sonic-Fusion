require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const printify_api_key = process.env.PRINTIFYAPIKEY;
const printify_base_url = 'https://api.printify.com/v1';
app.use(bodyParser.json());

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
app.get('/products', async (req, res) => {
    try {
    const shopId = 16040083;
    const response = await apiClient.get(`/shops/${shopId}/products.json`);
    const titles = response.data.map(item => item.title);
    res.json(response.titles);
    }
    catch(error) {
        if (error.response && error.response.status) {
            res.status(error.response.status).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})