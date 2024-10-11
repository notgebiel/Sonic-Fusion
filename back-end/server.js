const express = require('express');
const app = express();
const port = process.env.PORT || 10000;
const cors = require('cors');
const axios = require('axios');
require('dotenv');
const bodyParser = require('body-parser');
const printify_api_key = process.env.PRINTIFYAPIKEY;
const printify_base_url = 'https://api.printify.com/v1';
let mainToSfMain = null;
app.use(cors());
app.use(express.json()); 
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
    res.json({ message: 'server link succesful' });
})

app.post('/', (req, res) => {
    console.log(req.body);
    const data = JSON.stringify(req.body.key);

    console.log('data: ', data);

    res.json({ message: 'data received' });
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
    } catch (error) {
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
    } catch (error) {
        res.status(error.response.status).json({ error: error.message });
    }
})

//get products
const shopId = 14971537;
//all products
app.get('/allproducts', async (req, res) => {
    try {
        const response = await axios.get(`${printify_base_url}/shops/${shopId}/products.json`, {
            headers: {
                'Authorization': `Bearer ${printify_api_key}`
            }
        });
        res.send(response.data.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
})
//product data for front-end
app.get('/products', async (req, res) => {
    try {

        const response = await axios.get(`https://api.printify.com/v1/shops/${shopId}/products.json`, {
            headers: {
                'Authorization': `Bearer ${printify_api_key}`
            }
        });

        const products = response.data.data.map(product => {
            // Create a map of image URLs keyed by variant ID
            const variantImageMap = product.images.reduce((map, image) => {
                image.variant_ids.forEach(variantId => {
                    map[variantId] = image.src;
                });
                return map;
            }, {});

            return {
                id: product.id,
                title: product.title,
                description: product.description,
                images: product.images.map(image => image.src),
                variants: product.variants.map(variant => ({
                    id: variant.id,
                    title: variant.title,
                    sku: variant.sku,
                    price: variant.price,
                    color: variant.options.color,
                    size: variant.options.size,
                    image: variantImageMap[variant.id] //|| product.images[0].src 
                }))
            };
        });

        res.json(products);

    }
    catch (error) {
        res.status(500).send(error.message);
    }
});


app.listen(port, console.log(`server listening on port ${port}`));