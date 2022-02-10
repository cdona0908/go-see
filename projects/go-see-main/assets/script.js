//----Selectors----//
var movieFormEl = document.querySelector("#title");
var inputMovieEl = document.querySelector("#input-movie");
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
      
      getMovieTrailer(movieTitle);
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
  var apiOmdbUrl = "https://www.omdbapi.com/?apikey=b1ac471e&t=" + title +"&plot=full";
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
  saveToWatchBtn.textContent="Save";
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

  //-------Awards------

  //create container for awards
  var awardsContainerEl = document.createElement("div");
  awardsContainerEl.setAttribute("id","awards-container");
  awardsContainerEl.setAttribute("class","awards-container");
  
  //create Awards Label
  var awardsLabel = document.createElement("h3");
  awardsLabel.textContent = 'Awards';  

  //create icon for Awards
  var awardsIcon = document.createElement("i");  
  awardsIcon.setAttribute("class","fas fa-trophy");
  
  //create span for Awards
  var awardList = document.createElement("span");
  awardList.setAttribute("class","awards");
  awardList.setAttribute("id","awards");
  awardList.textContent = info.Awards;

  awardsContainerEl.append( awardsLabel, awardsIcon,awardList);

  //append awards to description container

  descriptionContainer.appendChild(awardsContainerEl); 

 //-------Cast & Crew------

 //create container for Cast & Crew
 var crewContainerEl = document.createElement("div");
 crewContainerEl.setAttribute("id","crew-container");
 crewContainerEl.setAttribute("class","crew-container");
 //create Cast & Crew Label
 var crewLabel = document.createElement("h3");
 crewLabel.textContent = 'Cast & Crew';  

 // Create Director elements
 //Create container for directors
 var directorsContainerEl = document.createElement("div");
 directorsContainerEl.setAttribute("id","directors-container");
 directorsContainerEl.setAttribute("class","directors-container");
 //create Directors Label
 var directorsEl = document.createElement("h4");
 directorsEl.textContent = 'Directors:';
 //create Directors List
 var directorsList = document.createElement("span");  
  directorsList.setAttribute("id","directors");
  directorsList.textContent = info.Director;

  directorsContainerEl.append(directorsEl,directorsList);

 //Create Actors elements
 //Create container for actors
 var actorsContainerEl = document.createElement("div");
 actorsContainerEl.setAttribute("id","actors-container");
 actorsContainerEl.setAttribute("class","actors-container");
 //create Actors Label
 var actorsEl = document.createElement("h4");
 actorsEl.textContent = 'Actors:';
 //create Actors List
 var actorsList = document.createElement("span");  
  actorsList.setAttribute("id","actors");
  actorsList.textContent = info.Actors;

  actorsContainerEl.append(actorsEl, actorsList);
  
  //append actors and directors to cast & crew container

  crewContainerEl.append(crewLabel, directorsContainerEl, actorsContainerEl);

  //append Cast and Crew to description container

  descriptionContainer.appendChild(crewContainerEl);

};

var displayMovieLink = function(trailerLink) {
  if(!trailerLink){
    return 'Failed To Load Trailer Link';
  }; 
  var trailerLinkEl = document.createElement('a');
  trailerLinkEl.setAttribute('id', 'trailerLink');
  trailerLinkEl.setAttribute('href',trailerLink);
  trailerLinkEl.textContent = trailerLink; 
  descriptionContainer.appendChild(trailerLinkEl);
}

// WHEN the user wants to search for a movie THEN they can input a year and genre to get a list selection

//  WHEN the user gets a list, THEN the year of release, awards, ratings, run time is given

//  Congregating our urls to use later.
const YTAPIKEY = '&key=AIzaSyAI0RHGWb89XVlFFWks7NfYy0J0uQRu-HY'
const QUERYURL = 'https://youtube.googleapis.com/youtube/v3/'
const WATCHURL = 'https://www.youtube.com/watch?v='

var getMovieTrailer = function (movieName) {

    // Gathering our user input and assigning it a name 
  

    // Combining our QUERYURL,UserInput, and APIKEY. We also use Youtube's field parameters to refine wthe response we get. 
    var titleSearch = `${QUERYURL}search?part=snippet&maxResults=1&channelId=UCi8e0iOVk1fEOogdfu4YgfA&q=${movieName}${YTAPIKEY}`;
    
    

    fetch(titleSearch)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            // take itemes arr from data
            console.log(data);
            var itemsArr = data.items;
            // itemsarr.forEach((item)=>{ YOUR CODE HERE })
            const trailerId = itemsArr[0].id.videoId;
            console.log(trailerId);
            displayMovieTrailer(trailerId);
                        
            //const trailerLink = `${WATCHURL}${trailerId}`;             
            //displayMovieLink(trailerLink)
        }).catch((err)=>{
          console.error(err)
        });
    
};

var displayMovieTrailer = function(movieId){
  var trailerContainerEl = document.createElement("div");
  trailerContainerEl.setAttribute("class","video-container");
  var trailerTitleEl = document.createElement("h3");
  trailerTitleEl.textContent = 'Trailer';
  // create variable to hold yhe videoId  
  var returnedVideoId = movieId;
  //create iframe for trailer 
  var trailerVideoEl = document.createElement("iframe");
  trailerVideoEl.setAttribute("id","player");
  trailerVideoEl.setAttribute("type","text/html");
  trailerVideoEl.setAttribute("width","640");
  trailerVideoEl.setAttribute("height","390");
  trailerVideoEl.setAttribute("src","https://www.youtube.com/embed/" + returnedVideoId + "?enablejsapi=1");
  trailerVideoEl.setAttribute("frameborder","0");
  //append trailer video to trailer container
  trailerContainerEl.append(trailerTitleEl, trailerVideoEl);
  //append trailer container to description container
  descriptionContainer.appendChild(trailerContainerEl);
};

//Event Listeners

movieFormEl.addEventListener("submit", formSubmitHandler);









// When I want to save the movie for later, a list is created via localStorage with title and a link to the trailer









// Set up remove functions from local Storage























