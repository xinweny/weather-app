const Model = (() => {
	const _apiKey = '0faae275e2541631025d0daa0d952735';
	let unit = 'metric';

  const celsiusToFarenheit = (temp) => (9 / 5) * temp + 32;

  const farenheitToCelsius = (temp) => (5 / 9) * (temp - 32);

  function _getLocalDateTime(offset) {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;

    const localTime = utc + (offset * 1000);

    return new Date(localTime);
  }

  async function _getApiResponseData(queryURL) {
    try {
      const response = await fetch(queryURL, { mode: 'cors' });
      const result = await response.json();

      return result;
    } catch (error) {
      return error;
    }
  }

  async function getGeocode(city) {
    try {
      const data = await _getApiResponseData(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${_apiKey}`);

      if (data.length === 0) {
        throw new Error(`No cities found for '${city}'.`);
      } else {
        return data[0];
      }
    } catch (error) {
      return error;
    }
  }

  async function getWeather(geoObj) {
    try {
      const data = await _getApiResponseData(`https://api.openweathermap.org/data/2.5/weather?lat=${geoObj.lat}&lon=${geoObj.lon}&units=${Model.unit}&appid=${_apiKey}`);

      data.city_name = geoObj.name;
      data.local_time = _getLocalDateTime(data.timezone);
			const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
      data.sys.country_name = regionNames.of(data.sys.country);
      data.main.temp_unit = Model.unit;

      return data;
    } catch (error) {
      console.log(`No weather data found for '${geoObj.name}'`);

      return error;
    }
  }

	return {
		unit,
		getGeocode,
		getWeather,
		celsiusToFarenheit,
		farenheitToCelsius,
	};
})();

export default Model;
