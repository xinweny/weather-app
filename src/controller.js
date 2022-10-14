import Model from './model';

const Controller = (() => {
  const _apiKey = '0faae275e2541631025d0daa0d952735';
  const _regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

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

  async function _getGeocode(city) {
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

  async function _getWeather(geoObj) {
    try {
      const data = await _getApiResponseData(`https://api.openweathermap.org/data/2.5/weather?lat=${geoObj.lat}&lon=${geoObj.lon}&units=${Model.unit}&appid=${_apiKey}`);

      data.city_name = geoObj.name;
      data.local_time = _getLocalDateTime(data.timezone);
      data.sys.country_name = _regionNames.of(data.sys.country);
      data.main.temp_unit = Model.unit;

      return data;
    } catch (error) {
      console.log(`No weather data found for '${geoObj.name}'`);

      return error;
    }
  }

  async function searchWeatherAPI(query) {
    const geoObj = await _getGeocode(query);

    return (geoObj instanceof Error) ? geoObj : _getWeather(geoObj);
  }

  function convertTemperatures(tempElements, unit) {
    Model.unit = unit;
    const converter = (unit === 'metric') ? Model.farenheitToCelsius : Model.celsiusToFarenheit;

    const newTemps = tempElements.map((e) => {
      const oldTemp = Number(e.textContent.slice(0, -2));
      const newTemp = converter(oldTemp);

      return newTemp;
    });

    return newTemps;
  }

  return {
    searchWeatherAPI,
    convertTemperatures,
  };
})();

export default Controller;
