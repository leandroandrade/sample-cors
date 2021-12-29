import express from 'express';
import cors from 'cors';

const app = express();

/**
 * Add cors, all requests from frontend will work!!!
 */
app.use(cors())

app.get('/', (req, res) => {
    return res.send({
        message: 'Message from backend',
        date: Date.now()
    })
});

app.listen(3000, () => console.log('backend started on port 3000'))
