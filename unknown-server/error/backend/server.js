import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send({
        message: 'Message from UNKNOWN backend',
        date: Date.now()
    })
});

app.listen(8000, () => console.log('UNKNOWN backend started on port 8000'))
