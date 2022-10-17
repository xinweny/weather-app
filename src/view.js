import { format } from 'date-fns';

const cache = {};
const importAll = (r) => r.keys().forEach((key) => {
	cache[key] = r(key);
});
importAll(require.context('../assets/icons', true, /\.png$/));

const View = (() => {
  function _getElement(selector) {
    return document.querySelector(selector);
  }

  function _clearElement(element) {
    element.textContent = '';
  }

  function _createElement(tag, cls) {
    const element = document.createElement(tag);
    element.className = cls;

    return element;
  }

  function _appendChildren(parent, children) {
    for (const child of children) {
      parent.appendChild(child);
    }
  }

  const _e = {
    content: _getElement('#content'),
    searchInput: _getElement('input[name="location"]'),
    searchForm: _getElement('#search-form'),
    toggleBtn: _getElement('#toggle-btn'),
    location: _getElement('#location'),
    weather: _getElement('#weather'),
    weatherDesc: _getElement('#weather-description'),
		mainIcon: _getElement('#main-icon'),
    localTime: _getElement('#local-time'),
    localDate: _getElement('#local-date'),
    currentTemp: _getElement('#current-temperature'),
    feelsLike: _getElement('#feels-like'),
    humidity: _getElement('#humidity'),
    pop: _getElement('#pop'),
    windSpeed: _getElement('#wind-speed'),
    hourlyForecast: _getElement('#hourly-forecast'),
    dailyForecast: _getElement('#daily-forecast'),

    setText(element, text) { this[element].textContent = text; },
  };

  function _getUnitSymbol(unit) {
    return (unit === 'metric') ? 'C' : 'F';
  }

	const _capitalize = (string) => string[0].toUpperCase() + string.slice(1);

  const _formatTemp = (temp, unit) => `${Math.round(temp)}º${unit}`;

	const _formatPop = (pop) => `${Math.round(pop * 100)}%`;

  const _unixToDate = (unixTimestamp) => new Date(unixTimestamp * 1000);

  function _displayWeatherData(data) {
    console.log(data);
		const unitSymbol = _getUnitSymbol(data.unit);

    _e.setText('location', `${data.city_name}, ${data.country_name}`);
    _e.setText('weather', data.current.weather[0].main);
    _e.setText('weatherDesc', _capitalize(data.current.weather[0].description));
    _e.setText('localTime', format(data.local_time, 'h:mm aaa'));
    _e.setText('localDate', format(data.local_time, 'iii do MMM yyyy'));
    _e.setText('currentTemp', _formatTemp(data.current.temp, unitSymbol));
    _e.setText('feelsLike', _formatTemp(data.current.feels_like, unitSymbol));
    _e.setText('humidity', `${data.current.humidity}%`);
    _e.setText('pop', _formatPop(data.current.pop));
    _e.setText('windSpeed', `${data.current.wind_speed} ${(unitSymbol === 'C') ? 'km/h' : 'mph'}`);

		_e.mainIcon.src = cache[`./${data.current.weather[0].icon}.png`];
  }

  function _displayHourlyData(data) {
		_clearElement(_e.hourlyForecast);
		const unitSymbol = _getUnitSymbol(data.unit);

    for (const hrData of data.hourly.slice(13, 37)) {
			console.log(hrData);
      const hrCard = _createElement('div', 'hourly-card');

      const hrTime = _createElement('p', 'hourly-time');
      hrTime.textContent = format(_unixToDate(hrData.dt), 'iii do MMM yyy h:mm aaa');

      const hrTemp = _createElement('p', 'hourly-temp temp');
      hrTemp.textContent = _formatTemp(hrData.temp, unitSymbol);

			const hrWeather = _createElement('p', 'hourly-icon icon');
			hrWeather.textContent = hrData.weather[0].icon;

      _appendChildren(hrCard, [
        hrTime,
        hrTemp,
				hrWeather,
      ]);

      _e.hourlyForecast.appendChild(hrCard);
    }
  }

  function _displayDailyData(data) {
		_clearElement(_e.dailyForecast);
		const unitSymbol = _getUnitSymbol(data.unit);

		for (const dData of data.daily.slice(1)) {
			const dCard = _createElement('div', 'daily-card');
			const dTime = _createElement('p', 'daily-time');
			dTime.textContent = format(_unixToDate(dData.dt), 'iii do MMM yyy');

			const dTempHigh = _createElement('p', 'daily-temp temp');
      dTempHigh.textContent = _formatTemp(dData.temp.max, unitSymbol);
			
			const dTempLow = _createElement('p', 'daily-temp temp');
      dTempLow.textContent = _formatTemp(dData.temp.min, unitSymbol);

			const dWeather = _createElement('p', 'daily-icon icon');
			dWeather.textContent = dData.weather[0].icon;

			_appendChildren(dCard, [
        dTime,
				dTempHigh,
				dTempLow,
				dWeather,
      ]);

			_e.dailyForecast.appendChild(dCard);
		}
  }

	function displayAllData(data) {
		_displayWeatherData(data);
		_displayHourlyData(data);
		_displayDailyData(data);
	}

  function bindSearchForm(handler) {
    _e.searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = _e.searchInput.value;

      handler(query)
        .then((data, rejected) => {
          if (!(data instanceof Error)) {
            _clearElement(_e.searchInput);

            displayAllData(data);
          } else {
            console.log(rejected);
          }
        });
    });
  }

  function bindToggleButton(handler) {
    _e.toggleBtn.addEventListener('click', () => {
      _e.toggleBtn.classList.toggle('celsius');

      const labels = Array.from(_e.toggleBtn.querySelectorAll('span'));
      for (const label of labels) {
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
    displayAllData,
    bindSearchForm,
    bindToggleButton,
  };
})();

export default View;
