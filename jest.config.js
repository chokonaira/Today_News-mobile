const { defaults } = require("jest-config");
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
};
