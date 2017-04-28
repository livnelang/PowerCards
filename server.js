var express=require('express');
var app = express();

app.use('/', express.static('./')).listen(process.env.PORT || 3000);
console.log('Client server listening on port 3000 ..\n');