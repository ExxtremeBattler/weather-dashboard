$( document ).ready(function(){
    let todaySection = document.getElementById("today")
    let todayHeader = document.getElementById("todayHeader")
    let forecastSection = document.getElementById("forecast")
    let searchButton = document.getElementById("search-button")
    let searchInput = document.getElementById("search-input")
    let todayInfo = document.getElementById("todayInfo")

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
        let geoURL = "https://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=c5f801d62e4ccdab988d155cc4462710"
       

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

                var count2 = 0
                
                
                todayHeader.innerHTML = (response.city.name + " ("+moment().format('L')+")")

                todaySection.append( document.createElement("br"), 
                document.createElement("br"),
                "Temp : " + response.list[0].main.temp + "°C",
                document.createElement("br"),
                document.createElement("br"),
                "Humidity : " + response.list[0].main.humidity + "%",
                document.createElement("br"),
                document.createElement("br"),
                "Wind : " + response.list[0].wind.speed + "KPH" )

                for (let i = 0; i <response.list.length; i++) {
                 

                  console.log("i is " +i);

                  if (i % 8 === 0 && i != 0 ){

                    console.log("found one!")
                    console.log(count2)
        

                    console.log(forecastCardsTitles[count2])

                      forecastCardsTitles[count2].innerHTML = " "
                      forecastCardsTitles[count2].append(response.list[i].dt_txt)

                      forecastCardsText[count2].innerHTML = ""
                      
                      forecastCardsText[count2].append("Temp : " + response.list[i].main.temp + "°C  ", 
                      "Humidity : " + response.list[i].main.humidity + "% ",
                      "Wind : " + response.list[i].wind.speed + "KPH")

                      count2 ++
  
                    }}})})})})
      

    function loadHistory() {
        button1.innerHTML = localStorage.getItem("search1"),
        
        button2.innerHTML = localStorage.getItem("search2"),
        
        button3.innerHTML = localStorage.getItem("search3"),

        button4.innerHTML = localStorage.getItem("search4"),
        
        button5.innerHTML = localStorage.getItem("search5"),
        
        button6.innerHTML = localStorage.getItem("search6")
    }
    

    loadHistory()

   
    
    searchButton.addEventListener("click", function(event) {
        event.preventDefault()

        if (searchInput.value === "") {

          alert("Invalid input! Please try again.")
          
        } else {
          
        
        todaySection.innerHTML = ""
        forecastSection.innerHTML = ""
         count++
        
        var city = document.getElementById("search-input").value
        var latitude
        var longitude
        let geoURL = "https://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=c5f801d62e4ccdab988d155cc4462710"

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
                var count3 = 0
                
                todayHeader.innerHTML = (response.city.name + "( "+moment().format('L') +" )")

                todaySection.append( document.createElement("br"), 
                document.createElement("br"),
                "Temp : " + response.list[0].main.temp + "°C",
                document.createElement("br"),
                document.createElement("br"),
                "Humidity : " + response.list[0].main.humidity + "%",
                document.createElement("br"),
                document.createElement("br"),
                "Wind : " + response.list[0].wind.speed + "KPH")

                for (let i = 0; i <response.list.length; i++) {
                  
                  if (i % 8 === 0 && i != 0 ){

                    console.log("found one!")
                    console.log(count3);
                    console.log("i is" +i);
                    
                      forecastCardsTitles[count3].innerHTML = response.list[i].dt_txt //+" " + response.list[i].weather[0].icon

                      forecastCardsText[count3].innerHTML = ""
                      forecastCardsText[count3].append("Temp : " + response.list[i].main.temp + "°C  ",
                      "Humidity : " + response.list[i].main.humidity + "% ",
                      "Wind : " + response.list[i].wind.speed + "KPH")

                      count3++
  
                    }}})})}})})
                    
                   
                  
                  

                  
                  
                




