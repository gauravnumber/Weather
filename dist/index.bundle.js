/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const api_key = "808d67d7b2bd95c69791f456b64b9e0e";

async function f() {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${ api_key }&units=metric`)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTs7QUFFQSxrR0FBa0csVUFBVTtBQUM1Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZLEdBQUcsV0FBVyxHQUFHLFdBQVc7OztBQUdoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEkiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpX2tleSA9IFwiODA4ZDY3ZDdiMmJkOTVjNjk3OTFmNDU2YjY0YjllMGVcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGYoKSB7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1kZWxoaSZhcHBpZD0keyBhcGlfa2V5IH0mdW5pdHM9bWV0cmljYClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkYXRhLnN5cy5zdW5yaXNlICogMTAwMClcclxuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgIGxldCBtaW5zID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICBsZXQgc2VjcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG5cclxuICAgIGlmIChob3VycyA8IDEwKSB7XHJcbiAgICAgICAgaG91cnMgPSAnMCcgKyBob3VycztcclxuICAgIH1cclxuIFxyXG4gICAgaWYgKG1pbnMgPCAxMCkge1xyXG4gICAgICAgIG1pbnMgPSAnMCcgKyBtaW5zO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWNzIDwgMTApIHtcclxuICAgICAgICBzZWNzID0gJzAnICsgc2VjcztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGAke2hvdXJzfToke21pbnN9OiR7c2Vjc31gO1xyXG5cclxuICAgIGxldCBzdW5zZXQgPSBuZXcgRGF0ZShkYXRhLnN5cy5zdW5zZXQgKiAxMDAwKVxyXG4gICAgbGV0IHN1bnNldEhvdXJzID0gc3Vuc2V0LmdldEhvdXJzKCk7XHJcbiAgICBsZXQgc3Vuc2V0TWlucyA9IHN1bnNldC5nZXRNaW51dGVzKCk7XHJcbiAgICBsZXQgc3Vuc2V0U2VjcyA9IHN1bnNldC5nZXRTZWNvbmRzKCk7XHJcbiAgICBsZXQgc3Vuc2V0RGF0ZSA9IGAke3N1bnNldEhvdXJzfToke3N1bnNldE1pbnN9OiR7c3Vuc2V0U2Vjc31gO1xyXG5cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLmlubmVySFRNTCA9IGRhdGEubmFtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJykuaW5uZXJIVE1MID0gZGF0YS5tYWluLnRlbXA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluJykuaW5uZXJIVE1MID0gZGF0YS5tYWluLnRlbXBfbWluO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heCcpLmlubmVySFRNTCA9IGRhdGEubWFpbi50ZW1wX21heDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWtlJykuaW5uZXJIVE1MID0gZGF0YS5tYWluLmZlZWxzX2xpa2U7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VucmlzZScpLmlubmVySFRNTCA9IGZvcm1hdHRlZERhdGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vuc2V0JykuaW5uZXJIVE1MID0gc3Vuc2V0RGF0ZTtcclxufVxyXG5cclxuZigpOyJdLCJzb3VyY2VSb290IjoiIn0=