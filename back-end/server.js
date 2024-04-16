const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('server linked succesfully');
})


app.listen(port, console.log(`server listening on port ${port}`));