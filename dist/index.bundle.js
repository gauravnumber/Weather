/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWlFLHlCQUF5QixPQUFPLDBCQUEwQixTQUFTLFVBQVU7QUFDOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEtBQUs7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVksR0FBRyxXQUFXLEdBQUcsV0FBVzs7O0FBR3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7OztBQUdULENBQUMsQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlfa2V5ID0gXCI4MDhkNjdkN2IyYmQ5NWM2OTc5MWY0NTZiNjRiOWUwZVwiO1xyXG5sZXQgbGF0LCBsb247XHJcblxyXG5cclxubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXQnKS5pbm5lckhUTUwgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9uJykuaW5uZXJIVE1MID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuXHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7cG9zaXRpb24uY29vcmRzLmxhdGl0dWRlfSZsb249JHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfSZhcHBpZD0keyBhcGlfa2V5IH0mdW5pdHM9bWV0cmljYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZGF0YS5zeXMuc3VucmlzZSAqIDEwMDApXHJcbiAgICAgICAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgbGV0IG1pbnMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICAgICAgbGV0IHNlY3MgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChob3VycyA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBob3VycyA9ICcwJyArIGhvdXJzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWlucyA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBtaW5zID0gJzAnICsgbWlucztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlY3MgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgc2VjcyA9ICcwJyArIHNlY3M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gYCR7aG91cnN9OiR7bWluc306JHtzZWNzfWA7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3Vuc2V0ID0gbmV3IERhdGUoZGF0YS5zeXMuc3Vuc2V0ICogMTAwMClcclxuICAgICAgICAgICAgbGV0IHN1bnNldEhvdXJzID0gc3Vuc2V0LmdldEhvdXJzKCk7XHJcbiAgICAgICAgICAgIGxldCBzdW5zZXRNaW5zID0gc3Vuc2V0LmdldE1pbnV0ZXMoKTtcclxuICAgICAgICAgICAgbGV0IHN1bnNldFNlY3MgPSBzdW5zZXQuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgICAgICBsZXQgc3Vuc2V0RGF0ZSA9IGAke3N1bnNldEhvdXJzfToke3N1bnNldE1pbnN9OiR7c3Vuc2V0U2Vjc31gO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykuaW5uZXJIVE1MID0gZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpLmlubmVySFRNTCA9IGRhdGEubWFpbi50ZW1wO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluJykuaW5uZXJIVE1MID0gZGF0YS5tYWluLnRlbXBfbWluO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4JykuaW5uZXJIVE1MID0gZGF0YS5tYWluLnRlbXBfbWF4O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlrZScpLmlubmVySFRNTCA9IGRhdGEubWFpbi5mZWVsc19saWtlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VucmlzZScpLmlubmVySFRNTCA9IGZvcm1hdHRlZERhdGU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW5zZXQnKS5pbm5lckhUTUwgPSBzdW5zZXREYXRlO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=