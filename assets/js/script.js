var inputMovieEl = document.querySelector("#input-movie");


var formSubmitHandler = function (event) {
    var movieTitle = inputMovieEl.value();

    if (movieTitle) {
        getMovieInfo(movieTitle);
        inputMovieEl.value = "";
    } else {
        alert("Please enter a valid movie title");
    }
    console.log(event)
}




//  Congregating our urls to use later.
const APIKEY = '&key=AIzaSyBC25-sXfyC7zAewvLulX5KxCLKO_nvJX8'
const QUERYURL = 'https://youtube.googleapis.com/youtube/v3/'
const WATCHURL = 'https://www.youtube.com/watch?v='


var getMovieInfo = function () {

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

getMovieInfo();


















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

