const Model = (() => {
  const _apiKey = '0faae275e2541631025d0daa0d952735';
  let _unit = 'metric';

  const celsiusToFarenheit = (temp) => (9 / 5) * temp + 32;

  const farenheitToCelsius = (temp) => (5 / 9) * (temp - 32);

  function setUnit(unit) {
    _unit = unit;
  }

  function _getLocalDateTime(time, offset) {
    const date = (time) ? new Date(time * 1000) : new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;

    const localTime = utc + (offset * 1000);

    return new Date(localTime);
  }

  function _getCardinalDirection(angle) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(angle / 45) % 8];
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

      if (data.length === 0) throw new Error(`No cities found for '${city}'.`);

      return data[0];
    } catch (error) {
      return error;
    }
  }

  async function getWeather(geoObj) {
    try {
      const data = await _getApiResponseData(`https://api.openweathermap.org/data/3.0/onecall?lat=${geoObj.lat}&lon=${geoObj.lon}&units=${_unit}&appid=${_apiKey}`);

      data.city_name = geoObj.name;
      data.local_time = _getLocalDateTime(null, data.timezone_offset);
      const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
      data.country_name = regionNames.of(geoObj.country);
      data.unit = _unit;
      data.current.pop = data.daily[1].pop;
      data.current.sunrise = _getLocalDateTime(data.current.sunrise, data.timezone_offset);
      data.current.sunset = _getLocalDateTime(data.current.sunset, data.timezone_offset);
      data.current.wind_deg_cardinal = _getCardinalDirection(data.current.wind_deg);

      for (const hrData of data.hourly) {
        hrData.local_time = _getLocalDateTime(hrData.dt, data.timezone_offset);
      }

      return data;
    } catch (error) {
      return error;
    }
  }

  return {
    setUnit,
    getGeocode,
    getWeather,
    celsiusToFarenheit,
    farenheitToCelsius,
  };
})();

export default Model;
