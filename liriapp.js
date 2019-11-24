const axios = require("axios");

axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=11165f40").then(
    function(response) {
        console.log("the movie rating is: "+ response.data.imdbRating)
    }
);

