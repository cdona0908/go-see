var inputMovieEl = document.querySelector("#input-movie");

// WHEN the user searches a movie title, THEN a list is created of movies with the same title 

var formSubmitHandler = function (event) {
    var movieTitle = inputMovieEl.value();

    if (movieTitle) {
        getMovieTrailer(movieTitle);
        inputMovieEl.value = "";
    } else {
        alert("Please enter a valid movie title");
    }
    console.log(event)
}


// WHEN the user wants to search for a movie THEN they can input a year and genre to get a list selection





//  WHEN the user gets a list, THEN the year of release, awards, ratings, run time is given






//  Congregating our urls to use later.
const APIKEY = '&key=AIzaSyAI0RHGWb89XVlFFWks7NfYy0J0uQRu-HY'
const QUERYURL = 'https://youtube.googleapis.com/youtube/v3/'
const WATCHURL = 'https://www.youtube.com/watch?v='


var getMovieTrailer = function () {

    // var apiUrl = "http://www.omdbapi.com/?t=movie&y=2021&apikey=b1ac471e"

    // Gathering our user input and assigning it a name 
    var userInput = 'IronMan'

    // Combining our QUERYURL,UserInput, and APIKEY. We also use Youtube's field parameters to refine with the response we get. 
    var titleSearch = `${QUERYURL}search?part=snippet&maxResults=10&q=${userInput}Trailer${APIKEY}`

    // working fetch
    fetch(titleSearch)
        .then(function (response) {
            console.log("response");
            return response.json();
        })
        .then(function (data) {
            console.log();
            // We Console log our response data before taking out waht we need. 
            console.log("Data:",data);

            // take itemes arr from data
            var itemsArr = data.items;
        
            // itemsarr.forEach((item)=>{ YOUR CODE HERE })

            for (let i = 0; i < itemsArr.length; i++) {
                const trailerId = itemsArr[i].id.videoId;
                const Trailerlink = `${WATCHURL}${trailerId}`; 
            }
        });

};


getMovieTrailer();

var displayMovieTrailer = function () {

    
}


// When I want to save the movie for later, a list is created via localStorage with title and a link to the trailer










// Set up remove functions from local Storage



















     // fetch format that my tutor suggested

    // fetch(apiUrl)
    //     .then(function (res) { res.json() })
    //     .then(function (responseData) {
    //         console.log(responseData)
    //         .catch(err => { console.log(err) })

    // });


     // original fetch request tried at the beginning with response but no data

            // fetch(apiUrl)
            // .then (function (response) {
            //     if (response.ok) {
            //         console.log (response);

            //         response.json()
            //         .then(function (data) {
            //             console.log(data);
            //         });
            //     }
            // })

