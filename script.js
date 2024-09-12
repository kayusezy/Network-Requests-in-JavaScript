document.getElementById('getWeatherButton').addEventListener('click', getWeather);

async function getWeather() {
const apiKey = '8061e75f0270f02519349ca99267c15e'; // Replace with your OpenWeatherMap API key
    const location = document.getElementById('locationInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        
        // Extract relevant data
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Update HTML content
        document.getElementById('location').textContent = `Location: ${cityName}`;
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('description').textContent = `Description: ${description}`;
    } catch (error) {
        // Handle errors
        document.getElementById('location').textContent = 'Location:';
        document.getElementById('temperature').textContent = 'Temperature:';
        document.getElementById('description').textContent = `Error: ${error.message}`;
    }
}
