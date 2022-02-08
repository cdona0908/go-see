//----Selectors----//
var movieFormEl = document.getElementById("title");
var searchInputEl = document.getElementById('input-movie');
var resultEl = document.getElementById('results-list');

//---- Global Variables----//


//----Functions----//


// Search Movie by Title 
var formSubmitHandler = function (event) {
  // prevent page from refreshing
  // get value from input element
  var movieTitle = searchInputEl.value.trim();
  console.log(`this is the movie you searched ${movieTitle}`)
  event.preventDefault();
 if (movieTitle) {
      // getMovieInfo(movieTitle);
      getMovieTrailer(movieTitle)
      console.log(movieTitle)
      // clear old content
      searchInputEl.value = "";
  } else {
      alert("Please enter a valid movie title");
  }
 
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
          //displayMovieInfo(data, title);          
         });
        } else {
        alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
      alert("Unable to connect to OMDB");
    });
  
};


//Display Movie Information Function

var displayMovieInfo= function(info){
  // check if api returned any movies
  if (info.length === 0){
    alert("No movies found with that title");
    return;
  }
};

var displayMovieLink = function(trailerLink) {
  if(!trailerLink){
    return 'Failed To Load Trailer Link';
  }; 
  var trailerLinkEl = document.createElement('a');
  trailerLinkEl.setAttribute('id', 'trailerLink');
  trailerLinkEl.setAttribute('href',trailerLink)
  trailerLinkEl.textContent = trailerLink; 
  resultEl.appendChild(trailerLinkEl)
}

// WHEN the user wants to search for a movie THEN they can input a year and genre to get a list selection

//  WHEN the user gets a list, THEN the year of release, awards, ratings, run time is given

//  Congregating our urls to use later.
const YTAPIKEY = '&key=AIzaSyAI0RHGWb89XVlFFWks7NfYy0J0uQRu-HY'
const QUERYURL = 'https://youtube.googleapis.com/youtube/v3/'
const WATCHURL = 'https://www.youtube.com/watch?v='

var getMovieTrailer = function () {

    // var apiUrl = "http://www.omdbapi.com/?t=movie&y=2021&apikey=b1ac471e"

    // Gathering our user input and assigning it a name 
    var userInput = 'IronMan'

    // Combining our QUERYURL,UserInput, and APIKEY. We also use Youtube's field parameters to refine wthe response we get. 
    var titleSearch = `${QUERYURL}search?part=snippet&maxResults=1&q=${userInput}Trailer${YTAPIKEY}`

    // working fetch
    fetch(titleSearch)
        .then(function (response) {
            console.log("response");
            return response.json();
        })
        .then(function (data) {
            // take itemes arr from data
            var itemsArr = data.items;
            // itemsarr.forEach((item)=>{ YOUR CODE HERE })
            const trailerId = itemsArr[0].id.videoId;
            const trailerLink = `${WATCHURL}${trailerId}`; 
            displayMovieLink(trailerLink)
        }).catch((err)=>{
          console.error(err)
        });
        
};
movieFormEl.addEventListener("submit",formSubmitHandler);




//




// When I want to save the movie for later, a list is created via localStorage with title and a link to the trailer









// Set up remove functions from local Storage



//Event Listeners



















