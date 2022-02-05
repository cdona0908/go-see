//----Selectors----//
var movieFormEl = document.querySelector("#movie-form");
var inputMovieEl = document.querySelector("#input-title");
var descriptionContainer = document.querySelector("description-container");

//---- Global Variables----//



//----Functions----//

// Search Movie by Title 
var formSubmitHandler = function (event) {
  // prevent page from refreshing
  event.preventDefault();
  // get value from input element
  var movieTitle = inputMovieEl.value.trim();

  if (movieTitle) {
      getMovieInfo(movieTitle);
      // clear old content
      inputMovieEl.value = "";
  } else {
      alert("Please enter a valid movie title");
  }
  console.log(event)
};

//Get Movie Information 
var getMovieInfo = function(title){
  // format the OMDB api url
  var apiOmdbUrl = "http://www.omdbapi.com/?apikey=b1ac471e&t=" + title +"&plot=full";
  //make OMDB api request
  fetch(apiOmdbUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
         console.log(response);
         response.json().then(function(data) {
          console.log(data);          
         });
        } else {
        alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
      alert("Unable to connect to OMDB");
    });
};

//Display Movie Information
getMovieInfo();

// WHEN the user wants to search for a movie THEN they can input a year and genre to get a list selection





//  WHEN the user gets a list, THEN the year of release, awards, ratings, run time is given






//  Congregating our urls to use later.
const APIKEY = '&key=AIzaSyBC25-sXfyC7zAewvLulX5KxCLKO_nvJX8'
const QUERYURL = 'https://youtube.googleapis.com/youtube/v3/'
const WATCHURL = 'https://www.youtube.com/watch?v='


var getMovieTrailer = function () {

    // var apiUrl = "http://www.omdbapi.com/?t=movie&y=2021&apikey=b1ac471e"

    // Gathering our user input and assigning it a name 
    var userInput = 'MillionDOllarBabyMovie'

    // Combining our QUERYURL,UserInput, and APIKEY. We also use Youtube's field parameters to refine wthe response we get. 
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

//getMovieTrailer();


// When I want to save the movie for later, a list is created via localStorage with title and a link to the trailer










// Set up remove functions from local Storage



//Event Listeners
movieFormEl.addEventListener("submit",formSubmitHandler);

















