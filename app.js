//Stock Market Portfolio App

const express = require('express');
const app = express();
const path = require('path');
const exphbs  = require('express-handlebars');
const request = require('request');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

//use body parser middleware
app.use(bodyParser.urlencoded({extended: false}));

const API_KEY = '';

function call_api(finishedAPI, stock_ticker){
    request('https://cloud.iexapis.com/stable/stock/'+ stock_ticker +'/quote?token=' + API_KEY, { json:true }, (err, res, body) => {
        if(err) { return console.log(err); }
        if (res.statusCode === 200){
            finishedAPI(body);
        }
    });
};


//set handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set home handlebars routes GET
app.get('/', function (req, res) {

    call_api(function(doneAPI){

        res.render('home', {
            stock: doneAPI
        });
    }, 'FB');

});
//set home handlebars routes POST
app.post('/', function (req, res) {

    call_api(function(doneAPI){
        res.render('home', {
            stock: doneAPI
        });
    }, req.body.stockTicker);

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