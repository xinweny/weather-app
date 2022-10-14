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

    setText(element, text) { this[element].textContent = text; },
  };

  function bindSearchForm(handler) {
    _e.searchForm.addEventListener('submit', (event) => {
			event.preventDefault();
      const query = _e.searchInput.value;
      handler(query)
        .then((data, rejected) => {
          if (data) {
            console.log(data);

            _e.setText('location', `${data.city_name}, ${data.sys.country_name}`);
            _e.setText('weather', data.weather[0].main);
            _e.setText('weatherDesc', data.weather[0].description);
            _e.setText('localTime', format(data.local_time, 'h:mm aaa'));
            _e.setText('localDate', format(data.local_time, 'iii do MMM yyyy'));

						const unit = (data.main.temp_unit === 'metric') ? 'C' : 'F';
            _e.setText('currentTemp', `${Math.round(data.main.temp)}º${unit}`);
          } else {
            console.log(rejected);
          }
        });
    });
  }

	function bindToggleButton(handler) {
		_e.toggleBtn.addEventListener('click', () => {
			_e.toggleBtn.classList.toggle('celsius');

			const tempElements = document.querySelectorAll('.temp');
			const unit = (_e.toggleBtn.classList.contains('celsius')) ? 'metric' : 'imperial';

			handler(unit);

			for (const label of _e.toggleBtn.querySelectorAll('span')) {
				label.classList.toggle('bolded');
			}
		});
	}

  return {
    bindSearchForm,
		bindToggleButton,
  };
})();

export default View;
