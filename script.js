const myKey = "390f977d921d42660f03c1ef22c0a36e";
const myCity = "Nairobi";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${myKey}&units=metric`;

// --- Lesson 12: Async Function with Loading State & Error Handling ---
async function getLocalWeather() {
    const cityElement = document.getElementById('city');
    
    // 1. ADD LOADING STATE (Deliverable requirement)
    if (cityElement) cityElement.innerText = "Loading...";

    try {
        const response = await fetch(url);
        
        // 2. CHECK RESPONSE STATUS (Deliverable requirement)
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('city').innerText = data.name;
            document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
        } else {
            document.getElementById('city').innerText = "City not found";
        }
    } catch (err) {
        console.error("Weather error:", err);
        if (cityElement) cityElement.innerText = "Error loading weather";
    }
}

getLocalWeather();

// --- Lesson 11: Demonstration of Promise Chaining ---
// Your teacher wants to see that you can also use .then() syntax
fetch(url)
    .then(response => response.json())
    .then(data => console.log("Lesson 11 Promise Demo (City):", data.name))
    .catch(error => console.log("Lesson 11 Promise Error:", error));
