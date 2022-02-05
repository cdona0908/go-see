//----Selectors----//
var movieFormEl = document.querySelector("#movie-form");
var inputMovieEl = document.querySelector("#input-title");
var descriptionContainer = document.querySelector("#description-container");

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
      descriptionContainer.textContent = "";
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
          displayMovieInfo(data);          
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

var displayMovieInfo = function(info){
  
  // check if api returned any movies
  if (info.length === 0){
    alert("No movies found with that title");
    return;
  }
  //-----movie Title----

  //create h2 element for movie title
  var titleEl = document.createElement("h2");
  titleEl.setAttribute("id","movie-title");
  titleEl.textContent = info.Title;
  // append to container
  descriptionContainer.appendChild(titleEl);

  //---------movie year, runtime and genre------

  //create div element for movie year, runtime and genre container
  var basicInfoEl = document.createElement("div");
  //create span element for year
  var yearEl = document.createElement("span");
  yearEl.setAttribute("id","release-year");
  yearEl.textContent = info.Year;
  basicInfoEl.appendChild(yearEl);
  
  //create span element for runtime
  var runTimeEl = document.createElement("span");
  runTimeEl.setAttribute("id","runtime");
  runTimeEl.textContent = info.Runtime;
  basicInfoEl.appendChild(runTimeEl);
  
  //create span element for genre
  var genreEl = document.createElement("span");
  genreEl.setAttribute("id","genre");
  genreEl.textContent = info.Genre;
  basicInfoEl.appendChild(genreEl);
  
  //append basic info to container
  descriptionContainer.appendChild(basicInfoEl);

  //-----Movie Trailer-----Add containers and call trailer function here

  //-------Ratings------
  //create container for rates
  var ratesEl = document.createElement("div");
  ratesEl.setAttribute("id","rates-container");
  ratesEl.setAttribute("class","rates-container");

  //create container for IMDB rates
  var imdbEl = document.createElement("div");
  //create IMDB icon element 
  var imdbIcon = document.createElement("i");  
  imdbIcon.setAttribute("class","fab fa-imdb");
  //create IMDB rate 
  var imdbRate = info.Ratings[0].Value;
  //append icon and rate to IMDB Element
  imdbEl.append(imdbIcon, imdbRate);
  //create container for Rotten Tomatoes rates
  var rottenTomatoesEl = document.createElement("div");
  //create Rotten Tomatoes icon element
  var tomatoIcon = document.createElement("i"); 
  // NEED TO FIND ICON FOR TOMATO, try also emoji !!!
  //create Rotten Tomatoes rate
  var tomatoRate = info.Ratings[1].Value;
  //append icon and rate to Rotten Tomatoes Element
  rottenTomatoesEl.append(tomatoIcon, tomatoRate);
  
  //Append Rates to rate container
  ratesEl.append(imdbEl, rottenTomatoesEl);
  //append Rates to description
  descriptionContainer.appendChild(ratesEl);
  
  //-------Save Button------
  var saveToWatchBtn = document.createElement("button");
  saveToWatchBtn.setAttribute("class","btn");
  saveToWatchBtn.setAttribute("id","save-movie");
  saveToWatchBtn.setAttribute("type","submit");
  
  descriptionContainer.appendChild(saveToWatchBtn);  

  //-------Plot------

  //create movie Info container
  var movieInfoContainer = document.createElement("div");
  movieInfoContainer.setAttribute("class","movie-info");
  //create movie Description Label
  var movieDescriptionEl = document.createElement("h3");
  movieDescriptionEl.textContent = 'Description';
    
  //create plot element
  var moviePlot = document.createElement("p");
  moviePlot.setAttribute("class","plot");
  moviePlot.textContent = info.Plot;

  movieInfoContainer.append(movieDescriptionEl, moviePlot);

  //append movie Info to description container

  descriptionContainer.appendChild(movieInfoContainer); 


};


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

















