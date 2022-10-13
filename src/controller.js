/* eslint-disable no-underscore-dangle */
import View from './view';

const Controller = (() => {
  const _apiKey = '0faae275e2541631025d0daa0d952735';

  async function _getApiResponseData(queryURL) {
    try {
      const response = await fetch(queryURL, { mode: 'cors' });
      const result = await response.json();

      return result;
    } catch (error) {

    }
  }

  async function _getGeocode(city) {
    try {
      const data = await _getApiResponseData(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${_apiKey}`);

      return data[0];
    } catch (error) {

    }
  }

  async function _getWeather(geoObj) {
    try {
      const data = await _getApiResponseData(`https://api.openweathermap.org/data/2.5/weather?lat=${geoObj.lat}&lon=${geoObj.lon}&appid=${_apiKey}`);

      data.cityName = geoObj.name;

      return data;
    } catch (error) {

    }
  }

  async function searchWeatherAPI(query) {
    try {
      const geoObj = await _getGeocode(query);
      const weatherObj = await _getWeather(geoObj);

      return weatherObj;
    } catch (error) {

    }
  }

  return {
    searchWeatherAPI,
  };
})();

export default Controller;
