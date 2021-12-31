(function () {
  window.CQ = window.CQ || {};
  window.CQ.CoreComponents = window.CQ.CoreComponents || {};
  window.CQ.CoreComponents.container = window.CQ.CoreComponents.container || {};
  window.CQ.CoreComponents.container.utils = {};
  window.CQ.CoreComponents.container.utils = {
    getDeepLinkItemIdx: function (a, b) {
      if (window.location.hash) {
        var c = window.location.hash.substring(1);
        if (
          document.getElementById(c) &&
          c &&
          a &&
          a._config &&
          a._config.element &&
          a._config.element.id &&
          a._elements &&
          a._elements[b] &&
          0 === c.indexOf(a._config.element.id + '-item-')
        )
          for (var d = 0; d < a._elements[b].length; d++)
            if (a._elements[b][d].id === c) return d;
        return -1;
      }
    },
    getDeepLinkItem: function (a, b) {
      var c = window.CQ.CoreComponents.container.utils.getDeepLinkItemIdx(a, b);
      if (a && a._elements && a._elements[b]) return a._elements[b][c];
    },
    scrollToAnchor: function () {
      setTimeout(function () {
        if (location.hash && '#' !== location.hash) {
          var a = decodeURIComponent(location.hash);
          (a = document.querySelector(a)) && a.offsetTop && a.scrollIntoView();
        }
      }, 100);
    },
  };
})();
