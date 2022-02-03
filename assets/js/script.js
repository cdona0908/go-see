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


var getMovieInfo = function () {

    // var apiUrl = "http://www.omdbapi.com/?t=movie&y=2021&apikey=b1ac471e"

    // ?i=tt3896198&
    
    var apiUrl = "https://www.googleapis.com/youtube/v3/videos/?apikey=AIzaSyBC25-sXfyC7zAewvLulX5KxCLKO_nvJX8"


    // API key Ash got when going to enable API key
    // AIzaSyAI0RHGWb89XVlFFWks7NfYy0J0uQRu-HY
    
   
    // working fetch

            fetch(apiUrl) 
                .then(function (response) {
                    console.log("response");
                    return response.json();
                })
                .then(function (data) {
                        console.log("data"); 
                        console.log(data);           
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

