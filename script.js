$( document ).ready(function(){
    
    var latitude
    var longitude
    let searchButton = document.getElementById("search-button")
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+
    "&appid=c5f801d62e4ccdab988d155cc4462710"

    searchButton.addEventListener("click", function(event) {
        event.preventDefault()
        var city = document.getElementById("search-input").value
        console.log(city);

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response){

            $.ajax({
                url: queryURL,
                method: "GET"
              }).then(function(response){

              })

          }
    )})

})




