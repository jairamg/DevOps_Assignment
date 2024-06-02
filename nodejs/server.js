// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an Express app
const app = express();

// Using bodyParser middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up a route to serve HTML form
app.get('/', (req, res) => {
  res.send(`
    <body>
      <h1>Simple NodeJs Application Which gets User Input and display the results</h1>
      <form action="/submit" method="post">
          <label for="inputText">Enter your name:</label>
          <input type="text" id="inputText" name="name">
          <label for="inputText1">Enter your Overall Experience:</label>
          <input type="text" id="inputText1" name="exp">
          <label for="inputText2">Enter your Skills:</label>
          <input type="text" id="inputText2" name="skills">
          <button type="submit">Submit</button>
          <br>
          <br>
          <br>
          This App is using Nginx as Frontend and Nodejs as Backend 
          <br>
          <br>
          <br>
          Developed by  Jayaraman G :) !!!
          <br>
          <br>
          <br>
      </form>
    `);
});

// Handling form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const exp = req.body.exp;
  const skills = req.body.skills;
  res.send(`
    <body>
      <h1>Form Submitted Successfully</h1>
      <p>Hello, ${name}!</p>
      <p>You are having ${exp} years of Experience in ${skills}!!!</p>
      <a href="/">Go Back</a>
    </body>
  `);
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
