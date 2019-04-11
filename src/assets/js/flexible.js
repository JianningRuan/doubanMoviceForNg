;(function (baseFontSize) {
  baseFontSize = baseFontSize || 7.5;
  const docEl = document.documentElement;
  let refresh = function () {
    const dpr = window.devicePixelRatio, deviceWidth = docEl.getBoundingClientRect().width, deviceFontSize = deviceWidth / baseFontSize + "px";
    docEl.setAttribute('data-dpr', dpr);
    docEl.style.fontSize = deviceFontSize;
  };
  window.addEventListener('resize', function () {
    refresh();
    return;
  }, false);
  refresh();
})();
