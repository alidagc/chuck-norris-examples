const express = require('express');
const Chuck = require('chucknorris-io');


const app = express();
const client = new Chuck();


app.set('view engine', 'ejs');

app.set('views', 'views');



app.get('/', (req, res, next) => {

  client.getRandomJoke().then((jokeInfo) => {
    console.log(jokeInfo.value);

    res.render('some-view.ejs');
  });

});



app.listen(3000);
