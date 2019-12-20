//Stock Market Portfolio App

const express = require('express');
const app = express();
const path = require('path');
const exphbs  = require('express-handlebars');

const PORT = process.env.PORT || 5000;

//set handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set handlebars routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: "This is Stuff"
    });
});

//set static folder
//app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT);
})