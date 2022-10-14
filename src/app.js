import Controller from './controller';
import View from './view';

import './style.css';

(() => {
  View.bindSearchForm(Controller.searchWeatherAPI);
	View.bindToggleButton(Controller.convertTemperatures);

	Controller.searchWeatherAPI('Tokyo')
		.then((data) => View.displayData(data));
})();
