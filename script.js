$( document ).ready(function(){
    let todaySection = document.getElementById("today")
    let forecastSection = document.getElementById("forecast")
    let searchButton = document.getElementById("search-button")

    var count = 0




    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")
    let button4 = document.getElementById("button4") 
    let button5 = document.getElementById("button5")
    let button6 = document.getElementById("button6")

    let historyButtonsArray = document.querySelectorAll(".history-button")
    let forecastCardsArray = document.querySelectorAll(".card")
    let forecastCardsTitles = document.querySelectorAll(".card-title")
    let forecastCardsText = document.querySelectorAll(".card-text")

    historyButtonsArray.forEach(element => {
      
      
      element.addEventListener("click", function(event){
      
      todaySection.innerHTML = ""
      forecastSection.innerHTML = ""

      var city = event.target.innerHTML
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
                  for (let j = 0; j < forecastCardsArray.length; j++) {
                    
                    if (i % 8 === 0 && i != 0 ){
                    

                      forecastCardsTitles[j].innerHTML = response.list[i].dt_txt,
                        document.createElement("br")
  
                        "Temp : " + response.list[i].main.temp + "°C",
                      document.createElement("br"),
                      "Humidity : " + response.list[i].main.humidity + "%",
                       document.createElement("br"),
                      "Wind : " + response.list[i].wind.speed + "KPH",
                      document.createElement("br"),
                      document.createElement("br")
  
                    }}}})})})

                    

                  
                    
                   
                  
                  
      
    


    
      

    function loadHistory() {
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
    }
    

    loadHistory()

   
    
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
        loadHistory()
       

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
                  }}})})})})})
                    
                   
                  
                  

                  
                  
                




