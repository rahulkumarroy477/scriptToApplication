
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather-btn');
const weatherInfo = document.getElementById('weather-info');

getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city === '') {
    alert('Please enter a city name.');
    return;
  }
  fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconUrl = http://openweathermap.org/img/wn/${icon}@2x.png;
      weatherInfo.innerHTML = 
        <h2>${city}</h2>
        <img src="${iconUrl}" alt="${description}">
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
      ;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
    });
});
