const Model = (() => {
	let unit = 'metric';

  const celsiusToFarenheit = (temp) => (9 / 5) * temp + 32;

  const farenheitToCelsius = (temp) => (5 / 9) * (temp - 32);

	return {
		unit,
		celsiusToFarenheit,
		farenheitToCelsius,
	};
})();

export default Model;
