'use strict';

const port = process.env.PORT || 3000;

const express = require( "express" );
const bodyparser = require( "body-parser" );
const exphbs = require( "express-handlebars" );
const methoverride = require( "method-override" );
const expstatic = require( "express-static" );
const mysql = require( "mysql" );

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

// app.use(expstatic(__dirname + '/public'));

app.set('view engine', 'handlebars');

app.get( "/", function( req, res ) {
    console.log( "GET:/" );
    mydb.getAll( function( burgerList ) {
        res.render( "burgers.handlebars", {
            data: "somedata",
            burgers: burgerList
        });
        res.redirect( "/" );
    })
    // res.json( { status: "OK" } );
});

app.post( "/add", function( req, res ) {
    console.log( req.body );
    res.json( { status: "OK" } );
})

app.delete( "/:id", function( req, res ) {
    console.log( "delete:" + req.params.id );
    mydb.deleteById( req.params.id );
    res.redirect( "/" );
})

app.listen( port, function() {
    console.log( "Listening on " + port );
})