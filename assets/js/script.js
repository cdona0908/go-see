var apiUrl = "http://www.omdbapi.com/?y=2020&apikey=b1ac471e" ;
fetch(apiUrl)
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

