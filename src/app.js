import Controller from './controller';
import View from './view';

import './style.css';

(() => {
  View.bindSearchForm(Controller.searchAPIWeather);
  View.bindToggleButton(Controller.convertTemperatures);

  Controller.searchAPIWeather('Tokyo')
    .then((data) => { View.displayAllData(data); });
})();
