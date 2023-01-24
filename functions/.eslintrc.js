module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "quotes": ["error", "double"],
    "new-cap": 0,
  },

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 8,
  },

};

