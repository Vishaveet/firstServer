const express = require('express');
const app = express();
const mysql = require('mysql');
const ejs = require('ejs');
const fs = require('fs');
const { error } = require('console');

const port = 8000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'nodedb'
});

// Connect to the MySQL server
connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL server');
});

// Define a route to render the data from MySQL
app.get('/', (req, res) => {
  connection.query('SELECT * FROM marks', (error, results) => {
    if (error) throw error;

    // Render the EJS template with data from the MySQL table
    res.render('template', { data: results });
  });
});
app.get('/create',(req,res)=>{
    connection.query(`INSERT INTO marks (id,name,subject,marks) values (6,'Mahesh','java',75)`,(error)=>{
        if(error) throw error;
        console.log('insert data successfully');
        res.send('Data insert successfully')
    })
})
// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
