const myKey = "390f977d921d42660f03c1ef22c0a36e";
const myCity = "Nairobi"; 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${myKey}&units=metric`;

async function getLocalWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('city').innerText = data.name;
            document.getElementById('temp').innerText = ` | ${Math.round(data.main.temp)}°C`;
        } else {
            document.getElementById('city').innerText = "Updating...";
        }
    } catch (err) {
        console.error("Weather error:", err);
    }
}

getLocalWeather();
