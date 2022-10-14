import { format } from 'date-fns';

const View = (() => {
  function _getElement(selector) {
    return document.querySelector(selector);
  }

  const _e = {
    content: _getElement('#content'),
    searchInput: _getElement('input[name="location"]'),
    searchForm: _getElement('#search-form'),
		toggleBtn: _getElement('#toggle-btn'),
    location: _getElement('#location'),
    weather: _getElement('#weather'),
    weatherDesc: _getElement('#weather-description'),
    localTime: _getElement('#local-time'),
    localDate: _getElement('#local-date'),
    currentTemp: _getElement('#current-temperature'),
		feelsLike: _getElement('#feels-like'),
		humidity: _getElement('#humidity'),
		windSpeed: _getElement('#wind-speed'),

    setText(element, text) { this[element].textContent = text; },
  };

	function _getUnitSymbol(unit) {
		return (unit === 'metric') ? 'C' : 'F';
	}

	const _formatTemp = (temp, unit) => `${Math.round(temp)}º${unit}`;

	function displayData(data) {
		const unitSymbol = _getUnitSymbol(data.main.temp_unit);

		_e.setText('location', `${data.city_name}, ${data.sys.country_name}`);
		_e.setText('weather', data.weather[0].main);
		_e.setText('weatherDesc', data.weather[0].description);
		_e.setText('localTime', format(data.local_time, 'h:mm aaa'));
		_e.setText('localDate', format(data.local_time, 'iii do MMM yyyy'));
		_e.setText('currentTemp', _formatTemp(data.main.temp, unitSymbol));
		_e.setText('feelsLike', _formatTemp(data.main.feels_like, unitSymbol));
		_e.setText('humidity', `${data.main.humidity}%`);
		_e.setText('windSpeed', `${data.wind.speed} ${(unitSymbol === 'C') ? 'km/h' : 'mph'}`);
	}

  function bindSearchForm(handler) {
    _e.searchForm.addEventListener('submit', (event) => {
			event.preventDefault();
      const query = _e.searchInput.value;
      handler(query)
        .then((data, rejected) => {
          if (data) {
						console.log(data);
						_e.searchInput.textContent = '';
						displayData(data);
          } else {
            console.log(rejected);
          }
        });
    });
  }

	function bindToggleButton(handler) {
		_e.toggleBtn.addEventListener('click', () => {
			_e.toggleBtn.classList.toggle('celsius');
			for (const label of _e.toggleBtn.querySelectorAll('span')) {
				label.classList.toggle('bolded');
			}

			const tempElements = Array.from(document.querySelectorAll('.temp'));
			const unit = (_e.toggleBtn.classList.contains('celsius')) ? 'metric' : 'imperial';
			const unitSymbol = _getUnitSymbol(unit);

			const newTemps = handler(tempElements, unit);
			for (let i = 0; i < tempElements.length; i += 1) {
				tempElements[i].textContent = _formatTemp(newTemps[i], unitSymbol);
			}
		});
	}

  return {
		displayData,
    bindSearchForm,
		bindToggleButton,
  };
})();

export default View;
