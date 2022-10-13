const View = (() => {
  function _getElement(selector) {
    return document.querySelector(selector);
  }

  const e = {
    content: _getElement('#content'),
    searchInput: _getElement('input[name="location"]'),
    searchBtn: _getElement('#submitBtn'),
  };

  function bindSearchButton(handler) {
    e.searchBtn.addEventListener('click', () => {
      const query = e.searchInput.value;
      const data = handler(query);
    });
  }

  return {
    bindSearchButton,
  };
})();

export default View;
