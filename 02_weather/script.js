document.addEventListener("DOMContentLoaded", () => {
  const textBox= document.getElementById('city-input');
  const getWeatherBtn= document.getElementById('get-weather-btn');
  const infobox =document.getElementById('weather-info')
  const cityname=document.getElementById('city-name')
  const temperature= document.getElementById('temperature')
  const description= document.getElementById('description')
  const errorMessage=document.getElementById(`error-message`)

  const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e"; //env variables
  
  getWeatherBtn.addEventListener('click' , async () => {
    const city= textBox.value.trim();
    if(!city) return;

    try {
      let weatherData = await fetchWeather(city); 
      showWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  })

 async function fetchWeather(city) {
  
 const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
 try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
 }
 catch (error) {
    console.error(error.message);
  }
}

function showWeatherData(weatherData){
    console.log(weatherData);
    const {name, main, weather} = weatherData;
    cityname.textContent = name ;
    temperature.textContent= `Temperature - ${main.temp}`;
    description.textContent= `Description - ${weather[0].description}`






  infobox.classList.remove("hidden");
  errorMessage.classList.add("hidden");
}



function showError() {

    infobox.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
