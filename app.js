//Stock Market Portfolio App

const express = require('express');
const app = express();
const path = require('path');
const exphbs  = require('express-handlebars');

const PORT = process.env.PORT || 5000;

const API_KEY = 'pk_56ac14c6600b4f109f90d1c8704f9855';

//set handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set home handlebars routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: "This is Stuff"
    });
});
//set about handlebars routes
app.get('/about.html', function (req, res) {
    res.render('about', {
        stuff: "This is Stuff"
    });
});

//set static folder
//app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT);
})