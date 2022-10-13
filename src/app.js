import Controller from './controller';
import View from './view';

import './style.css';

(() => {
  View.bindSearchButton(Controller.searchWeatherAPI);
})();
