const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.jsx',
    background: './src/js/background/background.js',
    content: './src/js/content/content.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
