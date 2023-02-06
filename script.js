$( document ).ready(function(){
    let todaySection = document.getElementById("today")
    let forecastSection = document.getElementById("forecast")
    let searchButton = document.getElementById("search-button")
    let historySection = document.getElementById("history")
    var count = 0


    button1 = document.createElement("button")
    button2 = document.createElement("button")
    button3 = document.createElement("button")
    button4 = document.createElement("button")
    button5 = document.createElement("button")
    button6 = document.createElement("button")



   historySection.append(
   button1.innerHTML = localStorage.getItem("search1"),
   document.createElement("br"),
   
   button2.innerHTML = localStorage.getItem("search2"),
   document.createElement("br"),
   
   button3.innerHTML = localStorage.getItem("search3"),
   document.createElement("br"),
  
   button4.innerHTML = localStorage.getItem("search4"),
   document.createElement("br"),
   
   button5.innerHTML = localStorage.getItem("search5"),
   document.createElement("br"),
   
   button6.innerHTML = localStorage.getItem("search6"),
   document.createElement("br")
   )    
    
    searchButton.addEventListener("click", function(event) {
        event.preventDefault()
        todaySection.innerHTML = ""
        forecastSection.innerHTML = ""
         count++
        
        var city = document.getElementById("search-input").value
        var latitude
        var longitude
        let geoURL = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=c5f801d62e4ccdab988d155cc4462710"

        localStorage.setItem("search"+count,city)
     
        
       

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
                    forecastSection.append( response.list[i].dt_txt,
                      document.createElement("br"),
                      "Temp : " + response.list[i].main.temp + "°C",
                    document.createElement("br"),
                    "Humidity : " + response.list[i].main.humidity + "%",
                     document.createElement("br"),
                    "Wind : " + response.list[i].wind.speed + "KPH",
                    document.createElement("br"),
                    document.createElement("br"),

                    ) 
                  }}})})})})
                    
                   
                  
                  

                  
                  
                




