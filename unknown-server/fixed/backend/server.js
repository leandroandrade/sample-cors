import express from 'express';
import axios from 'axios';

const unknownServer = 'http://localhost:8000';

const app = express();

app.get('/', async function (req, res) {
    const url = `${ unknownServer }${ req.url }`;

    const { data } = await axios.get(url);
    return res.send(data)
});

app.listen(3001, () => console.log('backend started on port 3001'))
