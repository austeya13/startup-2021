//Init storage
const storage = new Storage();
//Get store location data
const weatherLocation = storage.getLocationData();
// Initialise weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//Initialise UI
const ui = new UI();
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click',
  (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    //Change location
    weather.changeLocation(city, country);

    //Set loction in local storage
    storage.setLocationData(city, country);

    // Get and display weather
    getWeather();
    //Close modal
    $('#locModal').modal('hide');
  });



function getWeather() {
  weather.getWeather()
    .then(results => { 
      ui.paint(results)
     })
    .catch(error => console.log(error))
}