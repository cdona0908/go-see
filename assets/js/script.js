//----Selectors----//
var movieFormEl = document.querySelector("#movie-form");
var inputMovieEl = document.querySelector("#input-title");
var descriptionContainer = document.querySelector("description-container");
var modal = document.querySelector("#simpleModal");
var modalBtnEl = document.querySelector("#modalBtn");
var closeBtnEl = document.querySelector("#closeBtn");


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

getMovieInfo ();

//Display Movie Information Function

var displayMovieInfo = function(info, titleEl){
  // check if api returned any movies
  if (info.length === 0){
    alert("No movies found with that title");
    return;
  }

};


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

    // Combining our QUERYURL,UserInput, and APIKEY. We also use Youtube's field parameters to refine wthe response we get. 
    var titleSearch = `${QUERYURL}search?part=snippet&maxResults=1&q=${userInput}Trailer${APIKEY}`

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
                const trailerLink = `${WATCHURL}${trailerId}`; 
            }
        });

};

getMovieTrailer();



// Function to open modal
function openModal () {
  modal.style.display = 'block';
};
// Function to close modal
function closeModal () {
  modal.style.display = 'none';
};
// Function to close modal if outside click

function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

var displayMovieTrailer = function () {

    if (itemsArr.length === 0) {
        alert ("No trailer found");
        return
    }
    

}

//




// When I want to save the movie for later, a list is created via localStorage with title and a link to the trailer









// Set up remove functions from local Storage



//Event Listeners
window.addEventListener('click', outsideClick);
closeBtnEl.addEventListener('click', closeModal);
modalBtnEl.addEventListener('click', openModal);
movieFormEl.addEventListener("submit",formSubmitHandler);


















