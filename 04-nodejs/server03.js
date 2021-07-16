const express = require ('express');  //peticiones http
const bodyParser = require('body-parser'); //body

const router  = express.Router();

var app = express();
//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

//------
/*
router.get ('/', function(req, res) {
  res.send ('Hola desde get');
});
router.post ('/', function(req, res) {
  res.send ('Hola desde post');
});
router.delete ('/', function(req, res) {
  res.send ('Hola desde delete');
});
*/
//--------
/*
router.get('/message', function(req, res) {
  res.send ('Lista de mensajes');
});

router.post('/message', function(req, res) {
    console.log(req.query);
    console.log(req.body); 
    res.send ('Mensaje ' + req.body.name + ' agregado');
  });
*/
 
app.listen (3000);
console.log('La aplicacion esta escuchando en http://localhost:3000')
