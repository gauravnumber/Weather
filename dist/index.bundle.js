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
    let formattedDate = `${hours}:${mins}:${secs}`;

    document.getElementById('id01').innerHTML = data.main.temp;



    // console.log(`Current temperature: ${data.main.temp}`)
    // console.log(`Location: ${data.name}`)
    // console.log(`Sunrise: ${data.sys.sunrise}`)
    // console.log(`Sunrise: ${formattedDate}`)
}

f();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTs7QUFFQSxrR0FBa0csVUFBVTtBQUM1Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFNLEdBQUcsS0FBSyxHQUFHLEtBQUs7O0FBRWpEOzs7O0FBSUEsMkNBQTJDLGVBQWU7QUFDMUQsZ0NBQWdDLFVBQVU7QUFDMUMsK0JBQStCLGlCQUFpQjtBQUNoRCwrQkFBK0IsY0FBYztBQUM3Qzs7QUFFQSxJIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaV9rZXkgPSBcIjgwOGQ2N2Q3YjJiZDk1YzY5NzkxZjQ1NmI2NGI5ZTBlXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmKCkge1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9ZGVsaGkmYXBwaWQ9JHsgYXBpX2tleSB9JnVuaXRzPW1ldHJpY2ApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoZGF0YS5zeXMuc3VucmlzZSAqIDEwMDApXHJcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICBsZXQgbWlucyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHNlY3MgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgIGxldCBmb3JtYXR0ZWREYXRlID0gYCR7aG91cnN9OiR7bWluc306JHtzZWNzfWA7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkMDEnKS5pbm5lckhUTUwgPSBkYXRhLm1haW4udGVtcDtcclxuXHJcblxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGBDdXJyZW50IHRlbXBlcmF0dXJlOiAke2RhdGEubWFpbi50ZW1wfWApXHJcbiAgICAvLyBjb25zb2xlLmxvZyhgTG9jYXRpb246ICR7ZGF0YS5uYW1lfWApXHJcbiAgICAvLyBjb25zb2xlLmxvZyhgU3VucmlzZTogJHtkYXRhLnN5cy5zdW5yaXNlfWApXHJcbiAgICAvLyBjb25zb2xlLmxvZyhgU3VucmlzZTogJHtmb3JtYXR0ZWREYXRlfWApXHJcbn1cclxuXHJcbmYoKTsiXSwic291cmNlUm9vdCI6IiJ9