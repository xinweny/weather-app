/* eslint-disable no-underscore-dangle */
import View from './view';

const Controller = (() => {
  const _apiKey = '0faae275e2541631025d0daa0d952735';

  function _getLocalDateTime(timezone) {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;

    const localTime = utc + (timezone * 1000);

    return new Date(localTime);
  }

  async function _getApiResponseData(queryURL) {
    try {
      const response = await fetch(queryURL, { mode: 'cors' });
      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);

      return error;
    }
  }

  async function _getGeocode(city) {
    try {
      const data = await _getApiResponseData(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${_apiKey}`);

      return data[0];
    } catch (error) {
      console.log(`No cities found for '${city}'`);

      return error;
    }
  }

  async function _getWeather(geoObj) {
    try {
      const data = await _getApiResponseData(`https://api.openweathermap.org/data/2.5/weather?lat=${geoObj.lat}&lon=${geoObj.lon}&appid=${_apiKey}`);

      data.cityname = geoObj.name;
      data.localtime = _getLocalDateTime(data.timezone);

      return data;
    } catch (error) {
      console.log(`Weather data found for '${geoObj.cityname}'`);

      return error;
    }
  }

  async function searchWeatherAPI(query) {
    const geoObj = await _getGeocode(query);
    const weatherObj = await _getWeather(geoObj);

    return weatherObj;
  }

  return {
    searchWeatherAPI,
  };
})();

export default Controller;
