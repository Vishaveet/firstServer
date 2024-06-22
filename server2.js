const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));

// Define a route to render the products page
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  // Render the products page using EJS
  const { n1, n2 } = req.query;
  console.log('hi',req.query);
  let result = parseInt(n1) + parseInt(n2);
  console.log(result);
  res.send({'ans':`${result}`});
 
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
