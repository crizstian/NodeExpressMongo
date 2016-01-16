'use strict';
const restify = require('restify');
const mongojs = require('mongojs');
                  //database, collection
const db = mongojs('productsdb', ['products']);

const server  = restify.createServer();

//Create a new server
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

//start listen in the port 3000
server.listen(3000, function () {
    console.log("Server started @ 3000");
});

// create endpoints
// list the products
server.get("/products", (req, res, next) => {
  db.products.find((err, products) => {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(products));
    });
    return next();
});
// save new product
server.post('/product', (req, res, next) => {
  let product = req.params;
  db.products.save(product, (err, products) => {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    res.end(JSON.stringify(data));
  });
  return next();
});
// update an existing product
server.put('/product/:id', (req, res, next) => {
  // get the existing product
  db.products.findOne({ id: req.params.id }, (err, data) => {
    // merge req.params/product with the server/product
    var updProd = {}; // updated products
    // logic similar to jQuery.extend(); to merge 2 objects.
    for (let n in data)
        updProd[n] = data[n];

    console.log(">>>>>>>>>> updProd[n] = data[n]");
    console.log(JSON.stringify(updProd));

    for (let n in req.params)
        updProd[n] = req.params[n];

    console.log(">>>>>>>>>> updProd[n] = req.params[n]");
    console.log(JSON.stringify(updProd));

    db.products.update({ id: req.params.id}, updProd, { multi: false }, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(data));
    });
  });
  return next();
});

server.del('/product/:id', (req, res, next) => {
  db.products.remove({ id: req.params.id }, (err, data) => {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(true));
  });
  return next();
});

server.get('/product/:id', (req, res, next) => {
  db.products.findOne({ id: req.params.id }, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(data));
  });
  return next();
});
module.exports = server;
