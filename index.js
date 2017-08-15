const express = require('express'), //this is used instead of import!!
      app = express(), ///this will be its own const if line above has a comma
      //app now has a ton of methods
      bc = require('./book_controller.js'),
      bodyParser = require('body-parser'),
      port = 3000,
      data = require('./data.js');

//ports - 3000 - 12000
//this makes the server alaways listening adn ready to run
// app.listen(port, () => console.log(`I'm listening. -- Frasier`))
//if you're storing variables that are imported when server is running, they'll restart with server

// ========== Top - level Middleware =========== //

// console.log(data);
app.use(bodyParser.json());


// ========== endpoints =========== //

//CRUD - REST
// -Create  --------- POST 
// -Read ------- GET 
// -Update --------- PUT 
// -Delete -------- DELETE

//Methods must match
//in frontend: axios.get('/api/mydata).then()
// in backend: app.get('/api/mydata')

// app.METHOD(URL, HANDLER);
// --METHOD --- get, put, post, delete
// --URL --endpoint url ex '/api/mydata'
// --HANDLER ----callback function that fires when endpoint is hit
app.get('/api/getBooks', bc.get);
// app.get('/api/trogdor', (request, response) => {
//     response.status(200).json('burninate the peasants');
// });
app.post('/api/addBook', bc.post);

app.put('/api/updateBook/:index/:name', bc.put);

app.delete('/api/deleteMe/:index', bc.delete)





app.listen(port, () => console.log(`I'm listening. -- Frasier`))