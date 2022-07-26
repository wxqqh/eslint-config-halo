module.exports = {
  extends: [
    './index',
    '../rules/react',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.mjsx', '.tsx', 'mtsx'],
    }],
    'react/react-in-jsx-scope': 'off',
  },
};
