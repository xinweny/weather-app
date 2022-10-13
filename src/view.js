const View = (() => {
  function _getElement(selector) {
    return document.querySelector(selector);
  }

  const _e = {
    content: _getElement('#content'),
    searchInput: _getElement('input[name="location"]'),
    searchBtn: _getElement('#submit-btn'),
  };

  function bindSearchButton(handler) {
    _e.searchBtn.addEventListener('click', () => {
      const query = _e.searchInput.value;
      handler(query)
        .then((resolved, rejected) => {
					console.log(resolved)
				});

    });
  }

  return {
    bindSearchButton,
  };
})();

export default View;
