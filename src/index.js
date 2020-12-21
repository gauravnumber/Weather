const api_key = "808d67d7b2bd95c69791f456b64b9e0e";

async function f() {
    let lat, lon;

    navigator.geolocation.getCurrentPosition((position) => {
        // lat = position.coords.latitude; 
        lon = position.coords.longitude;
        document.getElementById('lat').innerHTML = position.coords.latitude;
        document.getElementById('lon').innerHTML = position.coords.longitude;
    });
    debugger;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ api_key }&units=metric`);
    const data = await response.json();

    let date = new Date(data.sys.sunrise * 1000)
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
 
    if (mins < 10) {
        mins = '0' + mins;
    }

    if (secs < 10) {
        secs = '0' + secs;
    }

    let formattedDate = `${hours}:${mins}:${secs}`;

    let sunset = new Date(data.sys.sunset * 1000)
    let sunsetHours = sunset.getHours();
    let sunsetMins = sunset.getMinutes();
    let sunsetSecs = sunset.getSeconds();
    let sunsetDate = `${sunsetHours}:${sunsetMins}:${sunsetSecs}`;


    document.getElementById('name').innerHTML = data.name;
    document.getElementById('temp').innerHTML = data.main.temp;
    document.getElementById('min').innerHTML = data.main.temp_min;
    document.getElementById('max').innerHTML = data.main.temp_max;
    document.getElementById('like').innerHTML = data.main.feels_like;
    document.getElementById('sunrise').innerHTML = formattedDate;
    document.getElementById('sunset').innerHTML = sunsetDate;

}

f();