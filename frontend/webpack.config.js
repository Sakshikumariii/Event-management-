const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify")
    }
  },
  // other configurations...
};
