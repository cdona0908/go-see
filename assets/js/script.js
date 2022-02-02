
var getMovieInfo = function () {

    var apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=b1ac471e"
    

    // apikey for youtube : "http://www.youtube.googleapis.com/AIzaSyBC25-sXfyC7zAewvLulX5KxCLKO_nvJX8"
    


    // fetch format that my tutor suggested

    // fetch(apiUrl)
    //     .then(function (res) { res.json() })
    //     .then(function (responseData) {
    //         console.log(responseData)
    //         .catch(err => { console.log(err) })

    // });

    // fetch format that I got from the module

            fetch(apiUrl) 
                .then(function (response) {
                    console.log("response");
                    return response.json();
                })
                .then(function (data) {
                        console.log("data"); 
                        console.log(data);           
                });

                

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
    };

    getMovieInfo();

    


