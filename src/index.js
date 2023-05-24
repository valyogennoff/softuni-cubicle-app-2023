const app = require('express')();
const handlebars = require('express-handlebars');
const port = 3000

// require('./config/express')(app);
// require('./config/routes')(app);

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views')

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => console.log(`Listening on port ${port}! Now its up to you...`));