const express = require("express"),
		 port = 8000,
		  app = express(),
		   bp = require('body-parser'),
		   db = "hero";

app.use(express.urlencoded({extended: true}));
app.use(bp.json());
app.use(express.static(__dirname + '/client/dist/client'));

const server = app.listen( port, () => {
	console.log(`listening on port ${port}`);
});

require("./server/config/mongoose")(db);
require("./server/config/routes.js")(app);