const express = require('express');
const app = express();
const port = 8000;

const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
  ];
  // Define a route to render the products page
app.get('/', (req, res) => {
    // Render the products page using EJS
    res.render('product.ejs', { products });
    // res.send('Hi')
  });

  // Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });