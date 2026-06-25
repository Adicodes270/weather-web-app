const CDN = "https://cdn.meteocons.com/3.0.0-next.10/svg/fill";

function getWeatherIcon(condition, is_day = 1) {
    const c = condition.toLowerCase();
    const day = is_day === 1;

    // ── Clear / Sunny ──────────────────────────────────────────────
    if (c === "sunny" || (c === "clear" && day))
        return `${CDN}/clear-day.svg`;
    if (c === "clear" && !day)
        return `${CDN}/clear-night.svg`;

    // ── Partly cloudy ──────────────────────────────────────────────
    if (c.includes("partly cloudy"))
        return day ? `${CDN}/partly-cloudy-day.svg` : `${CDN}/partly-cloudy-night.svg`;

    // ── Overcast / Cloudy ──────────────────────────────────────────
    if (c === "overcast")
        return day ? `${CDN}/overcast-day.svg` : `${CDN}/overcast-night.svg`;
    if (c === "cloudy")
        return `${CDN}/cloudy.svg`;

    // ── Mist / Fog ─────────────────────────────────────────────────
    if (c === "mist")
        return day ? `${CDN}/mist.svg` : `${CDN}/mist.svg`;
    if (c.includes("freezing fog"))
        return `${CDN}/extreme-fog.svg`;
    if (c.includes("fog"))
        return day ? `${CDN}/fog-day.svg` : `${CDN}/fog-night.svg`;

    // ── Drizzle ────────────────────────────────────────────────────
    if (c.includes("heavy freezing drizzle"))
        return day ? `${CDN}/partly-cloudy-day-drizzle.svg` : `${CDN}/partly-cloudy-night-drizzle.svg`;
    if (c.includes("freezing drizzle"))
        return day ? `${CDN}/partly-cloudy-day-drizzle.svg` : `${CDN}/partly-cloudy-night-drizzle.svg`;
    if (c.includes("patchy light drizzle"))
        return day ? `${CDN}/partly-cloudy-day-drizzle.svg` : `${CDN}/partly-cloudy-night-drizzle.svg`;
    if (c.includes("light drizzle"))
        return `${CDN}/drizzle.svg`;
    if (c.includes("drizzle"))
        return `${CDN}/drizzle.svg`;

    // ── Thunder ────────────────────────────────────────────────────
    if (c.includes("thundery outbreaks"))
        return day ? `${CDN}/thunderstorms-day.svg` : `${CDN}/thunderstorms-night.svg`;
    if (c.includes("patchy light rain with thunder"))
        return day ? `${CDN}/thunderstorms-day-rain.svg` : `${CDN}/thunderstorms-night-rain.svg`;
    if (c.includes("moderate or heavy rain with thunder"))
        return day ? `${CDN}/thunderstorms-day-rain.svg` : `${CDN}/thunderstorms-night-rain.svg`;
    if (c.includes("patchy light snow with thunder"))
        return day ? `${CDN}/thunderstorms-day-snow.svg` : `${CDN}/thunderstorms-night-snow.svg`;
    if (c.includes("moderate or heavy snow with thunder"))
        return day ? `${CDN}/thunderstorms-day-snow.svg` : `${CDN}/thunderstorms-night-snow.svg`;
    if (c.includes("thunder"))
        return day ? `${CDN}/thunderstorms-day.svg` : `${CDN}/thunderstorms-night.svg`;

    // ── Freezing Rain / Sleet ──────────────────────────────────────
    if (c.includes("light freezing rain"))
        return `${CDN}/sleet.svg`;
    if (c.includes("moderate or heavy freezing rain"))
        return `${CDN}/sleet.svg`;
    if (c.includes("light sleet showers"))
        return day ? `${CDN}/partly-cloudy-day-sleet.svg` : `${CDN}/partly-cloudy-night-sleet.svg`;
    if (c.includes("moderate or heavy sleet showers"))
        return `${CDN}/sleet.svg`;
    if (c.includes("patchy sleet"))
        return day ? `${CDN}/partly-cloudy-day-sleet.svg` : `${CDN}/partly-cloudy-night-sleet.svg`;
    if (c.includes("light sleet"))
        return `${CDN}/sleet.svg`;
    if (c.includes("moderate or heavy sleet"))
        return `${CDN}/sleet.svg`;
    if (c.includes("sleet"))
        return `${CDN}/sleet.svg`;

    // ── Ice Pellets / Hail ─────────────────────────────────────────
    if (c.includes("light showers of ice pellets"))
        return day ? `${CDN}/partly-cloudy-day-hail.svg` : `${CDN}/partly-cloudy-night-hail.svg`;
    if (c.includes("moderate or heavy showers of ice pellets"))
        return `${CDN}/hail.svg`;
    if (c.includes("ice pellets"))
        return `${CDN}/hail.svg`;

    // ── Rain ───────────────────────────────────────────────────────
    if (c.includes("patchy rain possible") || c.includes("patchy light rain"))
        return day ? `${CDN}/partly-cloudy-day-rain.svg` : `${CDN}/partly-cloudy-night-rain.svg`;
    if (c.includes("light rain shower"))
        return day ? `${CDN}/partly-cloudy-day-rain.svg` : `${CDN}/partly-cloudy-night-rain.svg`;
    if (c.includes("moderate or heavy rain shower"))
        return `${CDN}/rain.svg`;
    if (c.includes("torrential rain shower"))
        return `${CDN}/extreme-rain.svg`;
    if (c.includes("light rain"))
        return `${CDN}/rain.svg`;
    if (c.includes("moderate rain"))
        return `${CDN}/rain.svg`;
    if (c.includes("heavy rain"))
        return `${CDN}/extreme-rain.svg`;
    if (c.includes("rain"))
        return `${CDN}/rain.svg`;

    // ── Snow ───────────────────────────────────────────────────────
    if (c.includes("patchy snow possible") || c.includes("patchy light snow"))
        return day ? `${CDN}/partly-cloudy-day-snow.svg` : `${CDN}/partly-cloudy-night-snow.svg`;
    if (c.includes("blowing snow"))
        return `${CDN}/wind-snow.svg`;
    if (c.includes("blizzard"))
        return `${CDN}/extreme-snow.svg`;
    if (c.includes("patchy moderate snow") || c.includes("patchy heavy snow"))
        return day ? `${CDN}/partly-cloudy-day-snow.svg` : `${CDN}/partly-cloudy-night-snow.svg`;
    if (c.includes("light snow showers"))
        return day ? `${CDN}/partly-cloudy-day-snow.svg` : `${CDN}/partly-cloudy-night-snow.svg`;
    if (c.includes("moderate or heavy snow showers"))
        return `${CDN}/snow.svg`;
    if (c.includes("light snow"))
        return `${CDN}/snow.svg`;
    if (c.includes("moderate snow"))
        return `${CDN}/snow.svg`;
    if (c.includes("heavy snow"))
        return `${CDN}/extreme-snow.svg`;
    if (c.includes("snow"))
        return `${CDN}/snow.svg`;

    return day ? `${CDN}/partly-cloudy-day.svg` : `${CDN}/partly-cloudy-night.svg`;
}
const weatherInfo = document.querySelector(".weather-info");
const weatherTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherWind = document.querySelector('#wind-speed');
const weatherDesc = document.querySelector('#weather-desc');
const weatherHumidity = document.querySelector("#humidity");
const feelsLike = document.querySelector("#feels-like");
const greeting = document.querySelector("#greeting");
const errorIcon = document.querySelector('#error-icon');
const minorDetails = document.querySelector(".minor-details");
const timeText = document.querySelector("#time");
const dateText = document.querySelector("#date");

async function get7DayForecast(city) {
    try {
        // Step 1: Resolve plain city text into raw coordinates
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&format=json`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) return;

        const { latitude, longitude, name } = geoData.results[0];

        // Step 2: Query Open-Meteo metrics with additional keys appended to the URL
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,relative_humidity_2m_mean&timezone=auto`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        const daily = weatherData.daily;
        
        console.log(`--- 7-DAY FORECAST FOR ${name.toUpperCase()} ---`);

        for (let i = 0; i < daily.time.length; i++) {
            console.log(
                `Date: ${daily.time[i]} | ` +
                `Max Temp: ${daily.temperature_2m_max[i]}°C | ` +
                `Feels Like (Max): ${daily.apparent_temperature_max[i]}°C | ` +
                `Wind Speed Max: ${daily.wind_speed_10m_max[i]} km/h | ` +
                `Avg Humidity: ${daily.relative_humidity_2m_mean[i]}% | ` +
                `WMO Code: ${daily.weather_code[i]}`
            );
        }
    } catch (e) {
        console.log(`Open-Meteo Logging Error: ${e.message}`);
    }
}
// Updated getWeatherData to also pass is_day
async function getWeatherData(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=ebcb9bb3bf45435280d115810260906&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error Response Status : ${response.status}`);

        const data = await response.json();
        const temperature = data.current.temp_c;
        const tempRoundOff = Math.round(temperature);
        const wind_speed = data.current.wind_kph;
        const speedRoundOff = Math.round(wind_speed);
        const feels_like = data.current.feelslike_c;
        const feelsRoundOff = Math.round(feels_like);
        const humidity = data.current.humidity;
        const condition = data.current.condition.text;
        const is_day = data.current.is_day; // 1 = day, 0 = night

        const iconURL = getWeatherIcon(condition, is_day);

        weatherIcon.style.display = '';
        errorIcon.style.display = 'none';
        weatherIcon.src = iconURL;
        weatherTemp.innerHTML = `${tempRoundOff}°C`;

        weatherWind.innerHTML = `Wind Speed | ${speedRoundOff} Km/hr`
        weatherDesc.innerHTML = `${condition}`;
        weatherHumidity.innerHTML = `Humidity | ${humidity}%`;
        feelsLike.innerHTML = `Feels Like | ${feelsRoundOff}°C`;

        const localTime = new Date(data.location.localtime.replace(' ', 'T'));


        const dayName = localTime.toLocaleDateString('en-US', { weekday: 'long' });


        const formattedDate = localTime.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        const formattedTime = localTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        timeText.innerHTML = ` ${formattedTime} `;
        dateText.innerHTML = `${dayName}, ${formattedDate}`;


        const hour = localTime.getHours();
        let greetText;
        if (hour >= 5 && hour < 12) {
            greetText = "Good Morning";
        } else if (hour >= 12 && hour < 17) {
            greetText = "Good Afternoon";
        } else if (hour >= 17 && hour < 21) {
            greetText = "Good Evening";
        } else {
            greetText = "Go Sleep, Good Night";
        }

        greeting.innerHTML = greetText;




        console.log(weatherTemp);
        console.log(`Temperature = ${temperature}°C`);
        console.log(`Wind Speed  = ${wind_speed} km/h`);
        console.log(`Feels Like  = ${feels_like}°C`);
        console.log(`Humidity    = ${humidity}%`);
        console.log(`Condition   = ${condition}`);


    } catch (error) {
        console.log(`Error found : ${error}`);

        weatherIcon.style.display = 'none';
        errorIcon.style.display = 'block';
        weatherTemp.innerHTML = `No City named ${city} was found`;

        weatherDesc.innerHTML = ``;
        weatherInfo.style.gap = `2.2rem`;

         weatherWind.innerHTML = `--`;
        weatherHumidity.innerHTML = `--`;
        feelsLike.innerHTML = `--`;

        timeText.innerHTML = '--:--';
        dateText.innerHTML = 'City not found';


        greeting.innerHTML = "";

    }
}


document.addEventListener("DOMContentLoaded", (event) => {
    const searchbtn = document.getElementById("search-btn");
    const cityInput = document.getElementById('city-input');




    const performSearch = () => {
        const text = cityInput.value;
        if (text.trim() != "") {

            console.clear();
            getWeatherData(text);
            get7DayForecast(text);
            const weatherDisplay = document.querySelector('.weather-display');


            weatherDisplay.classList.remove('hidden')
        }
    };


    searchbtn.addEventListener('click', performSearch);

    cityInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
})