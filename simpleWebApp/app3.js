var express = require('express');
var app = express();
var server = app.listen(3000,function(){});
app.route('/').get(function(req,res){
	res.send("Tutorials on node");
})
