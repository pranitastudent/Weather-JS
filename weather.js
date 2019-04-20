class Weather {
    constructor(city, state) {
        this.apiKey = '5ba4e83350eae6abc5d776949a1efcfb';
        this.city = city;
//         this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);


        const responseData = await response.json();

        return (responseData);
        //** you can try with responseData.main */
        // return responseData.main;
        console.log(responseData);

    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}
