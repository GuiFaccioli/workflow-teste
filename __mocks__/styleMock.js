module.exports = new Proxy(
  {},
  {
    get: function (_, key) {
      return key;
    },
  }
);
