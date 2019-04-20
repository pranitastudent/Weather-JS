//  Init Storage

const storage = new Storage();
// Get stored location data

const weatherLocation = storage.getLocationData();


// Init weather object
const weather = new Weather(weatherLocation.city, weatherlocation.state);
//  init ui

const ui = new UI();

// console.log();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//  Change location event

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;


    // change location

    weather.changeLocation(city);

    // set location in local storage

    storage.setLocationData(city);

    // Get Weather Again - display

    getWeather();

    // Close modal

    $('#locModal').modal('hide');

});


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}