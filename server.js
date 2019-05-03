var express = require('express');
var app = express();

const hbs = require('hbs');
//Importando los Helpers
require('./hbs/helpers');

const port = process.env.PORT || 3001;

app.use( express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials( __dirname + '/views/parciales/' );
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    //res.send('Real Madrid Campeón');
    /*let salida={
        nombre: 'César García',
        edad: 43,
        url: req.url
    }*/
    res.render('home',{
        nombre: 'CESAR LEONARDO'
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        nombre: 'CESAR LEONARDO',
        imagen: "IMG_4692.jpg"
    });
});


app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${ port } `);
});