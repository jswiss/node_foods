var express 		= require('express'); 
var app     		= express(); 
var port    		= process.env.PORT || 3000;
var bodyParser  = require('body-parser'); 

var router  		= express.Router(); 

var foods = [
		{"name": "pizza", "yumminess": 5},
		{"name": "marmite", "yumminess": 1}
		];

//using templating engines with node
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Middleware logging functionality
app.use(function(req, res, next) { //next causes the browser to hang
	console.log('%s request to %s from %s', req.method, req.url, req.ip);
	next() //let's middleware continue through our system
})

// #INDEX
router.get('/', function(req, res) {
	res.render('index', { header: 'INDEX yo'})
	res.json(foods);
})


// #SHOW
router.get('/:id', function(req, res) {
	console.log(req.params);
	res.render('show', { header: 'show!' })
})

// #NEW
router.get('/new', function(req, res) {

})

// #CREATE
router.post('/', function(req, res) {
	console.log(req.body);
	foods.push(req.body);
})

// #EDIT
router.get('/:id/edit', function(req, res) {

})

// #UPDATE
router.put('/:id', function(req, res) {

})

// #DELETE
router.delete('/:id', function(req, res) {

})

app.use('/foods', router);

app.listen(port, function(){
	console.log("Server started on ", + port);
});