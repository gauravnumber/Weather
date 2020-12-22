const api_key = "808d67d7b2bd95c69791f456b64b9e0e";
let lat, lon;


navigator.geolocation.getCurrentPosition((position) => {
    document.getElementById('lat').innerHTML = position.coords.latitude;
    document.getElementById('lon').innerHTML = position.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${ api_key }&units=metric`)
        .then(response => response.json())
        .then(data => {
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

        });


})