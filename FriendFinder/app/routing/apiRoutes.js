var friendOpt = require("../data/friends");


module.exports = function(app) {


    app.get("/api/friends", function(req, res) {
        res.json(friendOpt);
    });


app.post('/api/friends', function(req, res){















		res.json(friendOpt);
	});
};