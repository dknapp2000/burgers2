'use strict';

const express = require( "express" );
const bodyparser = require( "body-parser" );
const exphbs = require( "express-handlebars" );
const methoverride = require( "method-override" );
const mysql = require( "mysql" );

const app = express();

