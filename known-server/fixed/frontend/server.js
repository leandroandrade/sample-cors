import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.render('home'));

app.listen(4000, () => console.log('frontend started on port 4000'))
