module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "globals": {
    "describe": false,
    "it": false,
    "beforeEach": false,
    "afterEach": false
  },
  "extends": "airbnb",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "never"
    ],
    "react/no-unescaped-entities": "off"
  }
}
