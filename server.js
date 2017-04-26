const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const bp = require('body-parser');
const app = express();

var root = __dirname;

app.use(express.static(path.resolve(root, 'client')));
app.use(express.static(path.resolve(root, 'client/partials')));
app.use(express.static(path.resolve(root, 'bower_components')));
app.use(bp.json());

//Database Considerations
require('./server/config/mongoose.js');

//Server Side routes
var routes_setter = require('./server/config/routes.js');
//routes_setter(app);

var listener = app.listen(port, function(){
    console.log('Initializing Server.js, listening on port ' + listener.address().port);

});
