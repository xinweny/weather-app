import Model from './model';

const Controller = (() => {
  async function searchWeatherAPI(query) {
    const geoObj = await Model.getGeocode(query);

    return (geoObj instanceof Error) ? geoObj : Model.getWeather(geoObj);
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
