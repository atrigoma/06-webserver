const express = require('express');
const app = express();

const hbs = require('hbs');
const helpers = require('./hbs/helpers') ;

const port= process.env.PORT || 3000;

hbs.registerPartials(__dirname + "/views/partials");



app.use( express.static(__dirname + "/public"));

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    // Con res.render, lo que va a hacer es renderizar la template home.hbs (que está dentro del folder views)
    res.render("home", {
        name: "alVaro triGo"
    });

  })

  
  app.get('/about', (req, res) => {

    // Con res.render, lo que va a hacer es renderizar la template home.hbs (que está dentro del folder views)
    res.render("about");

  })


app.listen(port, () =>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});