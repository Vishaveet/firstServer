const express = require("express");
const server = express();
const port = 8000;

server.use(express.urlencoded({ extended: true }));

// Define a route to render the products page
server.get("/", (req, res) => {
  res.send(`
        <form method="POST" action="/submit">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"><br><br>
          <button type="submit">Submit</button>
        </form>
      `);
});
server.post("/submit", (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);
  res.send(`Name: ${name}, Email: ${email}`);
});

// Start the server
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
