import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send({
        message: 'Message from backend',
        date: Date.now()
    })
});

app.listen(3000, () => console.log('backend started on port 3000'))
