/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsd0ZBQXdGLElBQUksT0FBTyxJQUFJLFNBQVMsVUFBVTtBQUMxSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZLEdBQUcsV0FBVyxHQUFHLFdBQVc7OztBQUdoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaV9rZXkgPSBcIjgwOGQ2N2Q3YjJiZDk1YzY5NzkxZjQ1NmI2NGI5ZTBlXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmKCkge1xyXG4gICAgbGV0IGxhdCwgbG9uO1xyXG5cclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgLy8gbGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlOyBcclxuICAgICAgICBsb24gPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXQnKS5pbm5lckhUTUwgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvbicpLmlubmVySFRNTCA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICB9KTtcclxuICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0keyBhcGlfa2V5IH0mdW5pdHM9bWV0cmljYCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoZGF0YS5zeXMuc3VucmlzZSAqIDEwMDApXHJcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICBsZXQgbWlucyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHNlY3MgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuXHJcbiAgICBpZiAoaG91cnMgPCAxMCkge1xyXG4gICAgICAgIGhvdXJzID0gJzAnICsgaG91cnM7XHJcbiAgICB9XHJcbiBcclxuICAgIGlmIChtaW5zIDwgMTApIHtcclxuICAgICAgICBtaW5zID0gJzAnICsgbWlucztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VjcyA8IDEwKSB7XHJcbiAgICAgICAgc2VjcyA9ICcwJyArIHNlY3M7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZvcm1hdHRlZERhdGUgPSBgJHtob3Vyc306JHttaW5zfToke3NlY3N9YDtcclxuXHJcbiAgICBsZXQgc3Vuc2V0ID0gbmV3IERhdGUoZGF0YS5zeXMuc3Vuc2V0ICogMTAwMClcclxuICAgIGxldCBzdW5zZXRIb3VycyA9IHN1bnNldC5nZXRIb3VycygpO1xyXG4gICAgbGV0IHN1bnNldE1pbnMgPSBzdW5zZXQuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHN1bnNldFNlY3MgPSBzdW5zZXQuZ2V0U2Vjb25kcygpO1xyXG4gICAgbGV0IHN1bnNldERhdGUgPSBgJHtzdW5zZXRIb3Vyc306JHtzdW5zZXRNaW5zfToke3N1bnNldFNlY3N9YDtcclxuXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS5pbm5lckhUTUwgPSBkYXRhLm5hbWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpLmlubmVySFRNTCA9IGRhdGEubWFpbi50ZW1wO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbicpLmlubmVySFRNTCA9IGRhdGEubWFpbi50ZW1wX21pbjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXgnKS5pbm5lckhUTUwgPSBkYXRhLm1haW4udGVtcF9tYXg7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlrZScpLmlubmVySFRNTCA9IGRhdGEubWFpbi5mZWVsc19saWtlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bnJpc2UnKS5pbm5lckhUTUwgPSBmb3JtYXR0ZWREYXRlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bnNldCcpLmlubmVySFRNTCA9IHN1bnNldERhdGU7XHJcblxyXG59XHJcblxyXG5mKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==