// const path = require('path');
const sass = require('sass');

module.exports = {
  // mode: 'development',
  // entry: path.join(__dirname, 'src', 'index.js'),
  /*
  output: {
    path: path.resolve(),
  }
  */
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: sass,
          },
        },
      ],
    }],
  },
};
