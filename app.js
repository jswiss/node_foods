var express 		= require('express'); 
var app     		= express(); 
var port    		= process.env.PORT || 3000;
var bodyParser  = require('body-parser'); 

var router  		= express.Router(); 

//using templating engines with node
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Middleware logging functionality
app.use(function(req, res, next) { //next causes the browser to hang
	console.log('You made a ' + req.method + 'request to ' + req.url + ' from ' + req.ip);
	console.log('%s request to %s from %s', req.method, req.url, req.ip);
	next() //let's middleware continue through our system
})

#INDEX
router.get('/', function(req, res) {
	res.sender('index', { header: 'INDEX yo'})
	res.json(foods);
})


#SHOW
router.get('/:id', function(req, res) {

})

#NEW
router.get('/new', function(req, res) {

})

#CREATE
router.post('/', function(req, res) {

})

#EDIT
router.get('/:id/edit', function(req, res) {

})

#UPDATE
router.put('/:id', function(req, res) {

})

#DELETE
router.delete('/:id', function(req, res) {

})

app.use('/foods', router);

app.listen(port, function(){
	console.log("Server started on ", + port);
});