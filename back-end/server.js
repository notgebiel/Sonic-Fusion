const express = require('express');
const app = express();
const port = process.env.PORT || 10000;
const cors = require('cors');
const axios = require('axios');

let mainToSfMain = null;
app.use(cors());
app.use(express.json());

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

app.listen(port, console.log(`server listening on port ${port}`));