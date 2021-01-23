class Weather {
  constructor(city, country) {
    this.apiKey = 'd9006e0a51462042590ac54b618a3f5f';
    this.city = city;
    this.state = country;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);
    const responseData = await response.json();

    return responseData;
  }

  //Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}