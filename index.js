const fetchData = () => {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=mexico%20city,mx&appid=df061b21ba8e8e738a4a21d3498c4917"
  )
    .catch((error) => console.error(error))
    .then((response) => response.json())
    .then((data) => setWeatherData(data));
};

const setWeatherData = (data) => {
  console.log(data);

  const datosClima = {
    location: data.name,
    temp: data.main.temp,
  };
  Object.keys(datosClima).forEach((key) => {
    document.getElementById(key).textContent = datosClima[key];
  });
};
function alerta() {
  alert("Error de conexion ");
}

const onLoad = () => {
  try {
    navigator.geolocation.getCurrentPosition(fetchData);
  } catch (error) {
    alerta();
  }
};
