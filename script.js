$( document ).ready(function(){
    let todaySection = document.getElementById("today")
    let forecastSection = document.getElementById("forecast")
    let searchButton = document.getElementById("search-button")
    
    searchButton.addEventListener("click", function(event) {
        event.preventDefault()
        
        var city = document.getElementById("search-input").value
        var latitude
        var longitude
        let geoURL = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=c5f801d62e4ccdab988d155cc4462710"
       

        $.ajax({
            url: geoURL,
            method: "GET"
          }).then(function(response){
            latitude = response[0].lat
            longitude = response[0].lon
            let queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+
    "&appid=c5f801d62e4ccdab988d155cc4462710"
            


            $.ajax({
                url: queryURL,
                method: "GET"
              }).then(function(response){
                
                console.log(response)
                todaySection.append(response.city.name+" ("+moment().format('L')+")", 
                document.createElement("br"), 
                "Temp : " + response.list[0].main.temp + "°C",
                document.createElement("br"),
                "Humidity : " + response.list[0].main.humidity + "%",
                document.createElement("br"),
                "Wind : " + response.list[0].wind.speed + "KPH")

                for (let i = 0; i <response.list.length; i++) {

                  if (i % 8 === 0 && i != 0 ){

                    console.log(response.list[i])
                    forecastSection.append("Temp : " + response.list[i].main.temp + "°C",
                    document.createElement("br"),
                    "Humidity : " + response.list[i].main.humidity + "%",
                     document.createElement("br"),
                    "Wind : " + response.list[i].wind.speed + "KPH") 
                  }}})})})})
                    
                   
                  
                  

                  
                  
                




