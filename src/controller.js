import Model from './model';

const Controller = (() => {
  async function searchAPIWeather(query) {
    const geoObj = await Model.getGeocode(query);

    return (geoObj instanceof Error) ? geoObj : Model.getWeather(geoObj);
  }

  function convertTemperatures(tempElements, unit) {
    Model.setUnit(unit);

    const converter = (unit === 'metric') ? Model.farenheitToCelsius : Model.celsiusToFarenheit;

    const newTemps = tempElements.map((e) => {
      const oldTemp = Number(e.textContent.slice(0, -2));
      const newTemp = converter(oldTemp);

      return newTemp;
    });

    return newTemps;
  }

  return {
    searchAPIWeather,
    convertTemperatures,
  };
})();

export default Controller;
