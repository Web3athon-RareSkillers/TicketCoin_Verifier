module.exports = {
  root: true,
  extends: '@react-native-community',
  files: ['react-native.config.js'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/no-commonjs': 'off',
  },
};
