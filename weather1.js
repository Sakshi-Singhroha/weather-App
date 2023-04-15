const avs = "590055d3fcea8a580b42cced858447f3";
const btn = document.getElementById('submit');
var city = prompt("write city name and in next step click on search ");

function submit() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${avs}`)
    .then((response)=> response.json())
    .then((data)=> {
      console.log(data)
      document.getElementById("city").innerHTML = data.name;
      document.getElementById("temp").innerHTML = data.main.temp;
      document.getElementById("sky").innerHTML = data.weather[0].description; // Use data.weather[0].description to get the sky condition
      document.getElementById("wind").innerHTML = data.wind.speed; // Use data.wind.speed to get the wind speed
    })
    .catch((error)=> console.log(error));
}

btn.addEventListener('click', submit);