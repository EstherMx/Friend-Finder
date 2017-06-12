var friendOpt = require("../data/friends.js");
var path = require("path");

var matchDifference = 0;


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendOpt);
    });


app.post('/api/friends', function(req, res){

	        var greatMatch = {
            name: "",
            image: "",
            matchDifference: 500
        };
        var userData     = req.body;
        var userName     = userData.name;
        var userImage    = userData.image;
        var userScores   = userData.scores;

        var totalDifference = 0;

        //loop through the friendOpt data array of objects to get each friendOpt scores
        var friendOptSize = friendOpt.length- 1;
        for(var i = 0; i < friendOptSize; i++){
            console.log(friendOpt[i].name);
            totalDifference = 0;

            //loop through that friendOpt score and the users score and calculate the 
            // absolute difference between the two and push that to the total difference variable set above
            for(var j = 0; j < 10; j++){
                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendOpt[i].scores[j]));
                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= greatMatch.matchDifference){

                    // Reset the bestMatch to be the new friend. 
                    greatMatch.name = friendOpt[i].name;
                    greatMatch.photo = friendOpt[i].photo;
                    greatMatch.matchDifference = totalDifference;
                }
            }
        }

        friendOpt.push(userData);
 
        res.json(greatMatch);
    });
};





