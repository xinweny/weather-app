import { format } from 'date-fns';

const View = (() => {
  function _getElement(selector) {
    return document.querySelector(selector);
  }

  const _e = {
    content: _getElement('#content'),
    searchInput: _getElement('input[name="location"]'),
    searchBtn: _getElement('#submit-btn'),
    cityName: _getElement('#city-name'),
    weather: _getElement('#weather'),
    weatherDesc: _getElement('#weather-description'),
    localTime: _getElement('#local-time'),
    localDate: _getElement('#local-date'),
    currentTemp: _getElement('#current-temperature'),

    setText(element, text) { this[element].textContent = text; },
  };

  function bindSearchButton(handler) {
    _e.searchBtn.addEventListener('click', () => {
      const query = _e.searchInput.value;
      handler(query)
        .then((data, rejected) => {
          if (data) {
            console.log(data);

            _e.setText('cityName', data.cityname);
            _e.setText('weather', data.weather[0].main);
            _e.setText('weatherDesc', data.weather[0].description);
            _e.setText('localTime', format(data.localtime, 'h:mm aaa'));
            _e.setText('localDate', format(data.localtime, 'iii do MMM yyyy'));
            _e.setText('currentTemp', `${Math.round(data.main.temp)}ºF`);
          } else {
            console.log(rejected);
          }
        });
    });
  }

  return {
    bindSearchButton,
  };
})();

export default View;
