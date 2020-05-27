var express = require('express');
var bodyParser = require('body-parser');    //using body-parser module

var app = express();                        //using express module

var urlencodedParser = bodyParser.urlencoded({ extended: true })      //used body-parser for forms parsing


app.set('view engine', 'ejs');                  //template engine ejs
app.use('/assets',express.static('assets')); //middleware

app.get('/', function (req, res) {
    res.render('index');                    //render is used for returning template ejs
});
app.get('/about', function (req, res) {
    // console.log(req.query);
    res.render('about',{qs:req.query});
});
app.post('/about', urlencodedParser, function (req, res) {      //using post method we are parsing the forms details in this middleware
    console.log(req.body);                                      //using body to print forms details
    res.render('about-success',{data: req.body});               //passing the data from about page to about-success
                                                                //use node mailer to use mail function.read more
});

app.get('/profile/:name', function (req, res) {
    var data = {Age:12, Hobbies:['Coding', 'sleeping','eating']}
    res.render('profile', { person: req.params.name, data: data });  //passing methods in views
});

app.listen(3000);
