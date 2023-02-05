$( document ).ready(function(){
    
    let searchButton = document.getElementById("search-button")
    
    searchButton.addEventListener("click", function(event) {
        event.preventDefault()
        
        var city = document.getElementById("search-input").value
        var latitude
        var longitude
        let geoURL = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=c5f801d62e4ccdab988d155cc4462710"
        console.log(city);


        $.ajax({
            url: geoURL,
            method: "GET"
          }).then(function(response){
            latitude = response[0].lat
            longitude = response[0].lon
            let queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+
    "&appid=c5f801d62e4ccdab988d155cc4462710"
            console.log(latitude, longitude)


            $.ajax({
                url: queryURL,
                method: "GET"
              }).then(function(response){
                console.log(response)

              })

          }
    )})

})




