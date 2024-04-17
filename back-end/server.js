const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

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
})


app.listen(port, console.log(`server listening on port ${port}`));