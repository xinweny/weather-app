const Model = (() => {
  const _apiKey = '0faae275e2541631025d0daa0d952735';
  let _unit = 'metric';

  const celsiusToFarenheit = (temp) => (9 / 5) * temp + 32;

  const farenheitToCelsius = (temp) => (5 / 9) * (temp - 32);

  function setUnit(unit) {
    _unit = unit;
  }

  function _getLocalDateTime(date, offset) {
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

      if (data.length === 0) return Promise.reject(new Error(`No cities found for '${city}'.`));

      return data[0];
    } catch (error) {
      return error;
    }
  }

  async function getWeather(geoObj) {
    try {
      const data = await _getApiResponseData(`https://api.openweathermap.org/data/3.0/onecall?lat=${geoObj.lat}&lon=${geoObj.lon}&units=${_unit}&appid=${_apiKey}`);

      data.city_name = geoObj.name;
      data.local_time = _getLocalDateTime(new Date(), data.timezone_offset);
      const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
      data.country_name = regionNames.of(geoObj.country);
      data.unit = _unit;
      data.current.pop = data.daily[1].pop;
      data.current.sunrise = _getLocalDateTime(
        new Date(data.current.sunrise * 1000),
        data.timezone_offset,
      );
      data.current.sunset = _getLocalDateTime(
        new Date(data.current.sunset * 1000),
        data.timezone_offset,
      );

      return data;
    } catch (error) {
      console.log(`No weather data found for '${geoObj.name}'`);

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
