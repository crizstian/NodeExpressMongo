'use strict';
const restify = require('restify');
const server  = require('./server');
const client  = restify.createJsonClient({ url: 'http://localhost:3000' });

// a static product to CREATE READ UPDATE DELETE
var testProduct = {
    id: "1",
    name: "Apple iPad AIR",
    os: "iOS 7, upgradable to iOS 7.1",
    chipset: "Apple A7",
    cpu: "Dual-core 1.3 GHz Cyclone (ARM v8-based)",
    gpu: "PowerVR G6430 (quad-core graphics)",
    sensors: "Accelerometer, gyro, compass",
    colors: "Space Gray, Silver"
};
// call to post new Product
client.post('/product', testProduct, (err, req, res, product) => {
  console.log("post to /product");
  if (err) {
      console.log("An error ocurred >>>>>>");
      console.log(err);
  } else {
      console.log('Product saved >>>>>>>');
      console.log(product);
  }
});
// call for getting the products
client.get('/products', function (err, req, res, products) {
  console.log("getting list of products");
	if (err) {
	    console.log("An error ocurred >>>>>>");
	    console.log(err);
	} else {
	    console.log("Total products " + products.length);
	    console.log('All products >>>>>>>');
	    console.log(products);
      testProduct = products;
	}
});
// call for updating a Product
testProduct.price = "1000 USD",
client.put('/product/' + testProduct.id, testProduct, function (err, req, res, status) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('Product saved >>>>>>>');
        console.log(status);
    }
});
// call for deleting a product
client.del('/product/' + testProduct.id, (err, req, res, status) => {
  if (err) {
      console.log("An error ocurred >>>>>>");
      console.log(err);
  } else {
      console.log('Product deleted >>>>>>>');
      console.log(status);
  }
});
// call for fetching one product
client.get('/product/' + testProduct.id, function (err, req, res, product) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('Product with id ' + product.id + '  >>>>>>>');
        console.log(product);
    }
});
